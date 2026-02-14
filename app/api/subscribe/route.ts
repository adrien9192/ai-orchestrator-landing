import { NextResponse } from "next/server";
import { appendFile, readFile, mkdir } from "fs/promises";
import { join } from "path";
import { existsSync } from "fs";

const SIGNUPS_DIR = "/tmp/signups";
const SIGNUPS_FILE = join(SIGNUPS_DIR, "emails.jsonl");

export async function POST(request: Request) {
  try {
    const { email, name, source, tag } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Email invalide" },
        { status: 400 }
      );
    }

    // Store email locally (works 100%)
    try {
      await mkdir(SIGNUPS_DIR, { recursive: true });
    } catch {}

    const signup = {
      email,
      name: name || "",
      timestamp: new Date().toISOString(),
      source: source || "landing-page",
      tag: tag || null,
    };

    await appendFile(
      SIGNUPS_FILE,
      JSON.stringify(signup) + "\n"
    );

    console.log("Email stored:", email, "| Source:", source, "| Tag:", tag);

    // Try ConvertKit integration
    try {
      const formId = process.env.CONVERTKIT_FORM_ID;
      const apiKey = process.env.CONVERTKIT_API_KEY;
      
      if (formId && apiKey) {
        const ckPayload: any = {
          api_key: apiKey,
          email,
        };

        // Add name if provided
        if (name) {
          ckPayload.first_name = name;
        }

        // Add tag if provided (for lead magnet tracking)
        if (tag) {
          ckPayload.tags = [tag];
        }

        const response = await fetch(
          `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(ckPayload),
          }
        );

        if (response.ok) {
          console.log("ConvertKit sync successful");
        } else {
          const errorData = await response.json();
          console.log("ConvertKit sync failed:", errorData);
        }
      }
    } catch (ckError) {
      console.log("ConvertKit sync failed (non-critical):", ckError);
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}

// GET endpoint to export signups
export async function GET() {
  try {
    if (!existsSync(SIGNUPS_FILE)) {
      return NextResponse.json({ total: 0, signups: [] });
    }

    const content = await readFile(SIGNUPS_FILE, "utf-8");
    const signups = content
      .trim()
      .split("\n")
      .filter(Boolean)
      .map(line => JSON.parse(line));

    // Group by source/tag
    const bySource: Record<string, number> = {};
    const byTag: Record<string, number> = {};

    signups.forEach((signup: any) => {
      bySource[signup.source] = (bySource[signup.source] || 0) + 1;
      if (signup.tag) {
        byTag[signup.tag] = (byTag[signup.tag] || 0) + 1;
      }
    });

    return NextResponse.json({
      total: signups.length,
      signups,
      stats: {
        bySource,
        byTag,
      },
      convertkit_form_id: process.env.CONVERTKIT_FORM_ID || "9084768"
    });
  } catch (error) {
    return NextResponse.json({ total: 0, signups: [], error: String(error) });
  }
}
