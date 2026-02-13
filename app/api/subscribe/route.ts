import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Email invalide" },
        { status: 400 }
      );
    }

    const apiKey = process.env.CONVERTKIT_API_KEY;
    
    if (!apiKey) {
      console.error("ConvertKit API key missing");
      return NextResponse.json(
        { error: "Configuration error" },
        { status: 500 }
      );
    }

    // Add subscriber using ConvertKit API v4
    const response = await fetch("https://api.kit.com/v4/subscribers", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        tags: ["ai-orchestrator-waitlist"]
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("ConvertKit API error:", errorData);
      return NextResponse.json(
        { error: "Failed to subscribe" },
        { status: 500 }
      );
    }

    const data = await response.json();
    console.log("Subscriber added:", email, data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
