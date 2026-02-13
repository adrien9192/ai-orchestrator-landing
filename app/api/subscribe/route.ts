import { NextResponse } from "next/server";
import { appendFile, readFile, mkdir } from "fs/promises";
import { join } from "path";
import { existsSync } from "fs";

const SIGNUPS_DIR = "/tmp/signups";
const SIGNUPS_FILE = join(SIGNUPS_DIR, "emails.jsonl");

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

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
      timestamp: new Date().toISOString(),
      source: "landing-page"
    };

    await appendFile(
      SIGNUPS_FILE,
      JSON.stringify(signup) + "\n"
    );

    console.log("Email stored:", email);

    // Also try ConvertKit but don't fail if it doesn't work
    try {
      const formId = process.env.CONVERTKIT_FORM_ID;
      const apiKey = process.env.CONVERTKIT_API_KEY;
      
      if (formId && apiKey) {
        await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ api_key: apiKey, email }),
        });
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

    return NextResponse.json({
      total: signups.length,
      signups,
      convertkit_form_id: process.env.CONVERTKIT_FORM_ID || "9084768"
    });
  } catch (error) {
    return NextResponse.json({ total: 0, signups: [], error: String(error) });
  }
}
