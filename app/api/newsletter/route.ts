import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { message: 'Email requis' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Email invalide' },
        { status: 400 }
      );
    }

    const convertKitApiKey = process.env.CONVERTKIT_API_KEY;
    const convertKitFormId = process.env.CONVERTKIT_FORM_ID;

    if (!convertKitApiKey || !convertKitFormId) {
      console.error('ConvertKit credentials not configured');
      return NextResponse.json(
        { message: 'Erreur de configuration serveur' },
        { status: 500 }
      );
    }

    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${convertKitFormId}/subscribe`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
          api_key: convertKitApiKey,
          email: email,
        }),
      }
    );

    if (!response.ok) {
      console.error('ConvertKit error:', response.statusText);
      return NextResponse.json(
        { message: 'Erreur lors de l\'inscription à la newsletter' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Inscription confirmée' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter API error:', error);
    return NextResponse.json(
      { message: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
