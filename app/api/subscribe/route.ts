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

    const apiSecret = process.env.CONVERTKIT_API_SECRET;
    
    if (!apiSecret) {
      console.error("ConvertKit API secret missing");
      return NextResponse.json(
        { error: "Configuration error" },
        { status: 500 }
      );
    }

    // Add subscriber using ConvertKit API v3
    const response = await fetch(`https://api.convertkit.com/v3/subscribers?api_secret=${apiSecret}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        tags: [7257820] // Tag ID for "ai-orchestrator-waitlist" - will be created if doesn't exist
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("ConvertKit API error:", response.status, errorData);
      
      // Even if tagging fails, subscriber might be added
      if (response.status !== 200 && response.status !== 201) {
        return NextResponse.json(
          { error: "Failed to subscribe" },
          { status: 500 }
        );
      }
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
