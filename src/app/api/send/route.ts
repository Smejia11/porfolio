import { CreateEmailResponseSuccess, Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { generateEmailHtml } from "@/app/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail: string | undefined = process.env.FROM_EMAIL;
const toEmail: string | undefined = process.env.TO_EMAIL;

export async function POST(req: NextRequest) {
  try {
    console.log("Received request:", fromEmail, toEmail);
    if (!fromEmail || !toEmail) {
      return NextResponse.json(
        {
          message:
            "Sufrimos un error inesperado: el correo del remitente no está configurado.",
        },
        { status: 500 }
      );
    }

    const { email, description, name } = await req.json();

    console.log("Parsed request body:", { email, description, name });

    if (!email || !name || !description) {
      return NextResponse.json(
        {
          message: "Faltan campos obligatorios en la solicitud.",
        },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: "Nuevo contacto",
      html: generateEmailHtml({ name, description, email }),
    });

    console.log("Sending email:", {
      from: fromEmail,
      to: [toEmail],
      subject: "Nuevo contacto",
      id: (data as CreateEmailResponseSuccess)?.id,
      uuid: randomUUID().toString(),
    });

    if (error) {
      console.error("Error sending email:", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    console.log("Email sent successfully:", data);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Unexpected error:", error);
    if (error instanceof Error)
      return NextResponse.json({ error: error.message }, { status: 500 });

    return NextResponse.json({ message: "Error inesperado" }, { status: 500 });
  }
}
