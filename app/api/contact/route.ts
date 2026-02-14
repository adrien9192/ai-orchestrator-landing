import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { message: 'Erreur serveur: configuration manquante' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { name, email, company_type, message } = body;

    if (!name || !email || !company_type || !message) {
      return NextResponse.json(
        { message: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    const emailContent = `
Nouvelle demande de contact

Nom: ${name}
Email: ${email}
Type d'entreprise: ${company_type}

Message:
${message}

---
Répondre à: ${email}
    `;

    const result = await resend.emails.send({
      from: 'noreply@formation.ai',
      to: 'contact@pillow.ai',
      subject: `Nouvelle demande de contact de ${name}`,
      text: emailContent,
      html: `
        <h2>Nouvelle demande de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Type d'entreprise:</strong> ${company_type}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><strong>Répondre à:</strong> ${email}</p>
      `,
    });

    if (result.error) {
      console.error('Resend error:', result.error);
      return NextResponse.json(
        { message: 'Erreur lors de l\'envoi du message' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Message envoyé avec succès' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { message: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
