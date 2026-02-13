import { NextResponse } from "next/server";
import { writeFile, readFile, mkdir } from "fs/promises";
import { join } from "path";

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

    // Store email locally
    try {
      await mkdir(SIGNUPS_DIR, { recursive: true });
    } catch {}

    const signup = {
      email,
      timestamp: new Date().toISOString(),
      source: "landing-page"
    };

    await writeFile(
      SIGNUPS_FILE,
      JSON.stringify(signup) + "\n",
      { flag: "a" }
    );

    console.log("Email stored:", email);

    // TODO: Sync to ConvertKit later with proper form ID
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}

// GET endpoint to export signups (for admin)
export async function GET() {
  try {
    const content = await readFile(SIGNUPS_FILE, "utf-8");
    const signups = content
      .trim()
      .split("\n")
      .filter(Boolean)
      .map(line => JSON.parse(line));

    return NextResponse.json({
      total: signups.length,
      signups
    });
  } catch (error) {
    return NextResponse.json({ total: 0, signups: [] });
  }
}
