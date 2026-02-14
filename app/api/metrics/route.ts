import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  try {
    // Read real signups from /tmp/signups/emails.jsonl
    const signupsPath = "/tmp/signups/emails.jsonl";
    let totalSignups = 0;
    let weeklySignups = 0;

    try {
      const fileContent = await fs.readFile(signupsPath, "utf-8");
      const lines = fileContent.trim().split("\n").filter(Boolean);
      totalSignups = lines.length;

      // Count signups from last 7 days
      const oneWeekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
      weeklySignups = lines.filter((line) => {
        try {
          const data = JSON.parse(line);
          const signupTime = new Date(data.timestamp).getTime();
          return signupTime > oneWeekAgo;
        } catch {
          return false;
        }
      }).length;
    } catch (err) {
      // File doesn't exist or can't be read, use defaults
      console.log("No signups file found, using defaults");
    }

    return NextResponse.json({
      totalSignups,
      weeklySignups,
      spotsLeft: Math.max(0, 100 - totalSignups),
    });
  } catch (error) {
    console.error("Error fetching metrics:", error);
    return NextResponse.json(
      { totalSignups: 0, weeklySignups: 0, spotsLeft: 100 },
      { status: 500 }
    );
  }
}
