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

    const formId = process.env.CONVERTKIT_FORM_ID;
    const apiSecret = process.env.CONVERTKIT_API_SECRET;
    
    if (!formId || !apiSecret) {
      console.error("ConvertKit config missing");
      return NextResponse.json(
        { error: "Configuration error" },
        { status: 500 }
      );
    }

    // Subscribe to ConvertKit form
    const response = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        api_secret: apiSecret,
        email: email
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("ConvertKit API error:", response.status, data);
      return NextResponse.json(
        { error: "Failed to subscribe" },
        { status: 500 }
      );
    }

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
