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

    const apiKey = process.env.CONVERTKIT_API_SECRET;
    
    if (!apiKey) {
      console.error("ConvertKit API secret missing");
      return NextResponse.json(
        { error: "Configuration error" },
        { status: 500 }
      );
    }

    // Use ConvertKit API v3 with public API key to add subscriber
    // No form needed - just add to main subscribers list
    const url = `https://api.convertkit.com/v3/subscribers`;
    
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        api_key: apiKey,
        email: email,
        first_name: "",
        fields: {
          source: "ai-orchestrator-landing"
        }
      }),
    });

    const data = await response.json();

    // ConvertKit returns 200 even if subscriber already exists
    if (response.ok || response.status === 200) {
      console.log("Subscriber added/updated:", email, data);
      return NextResponse.json({ success: true });
    }

    console.error("ConvertKit API error:", response.status, data);
    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: 500 }
    );

  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
