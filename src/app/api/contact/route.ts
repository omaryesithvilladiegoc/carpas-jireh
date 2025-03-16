import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { inputData } from "./types";
// Create email transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const formData: inputData = await request.json();
    const { nombre, email, tipoCarpa, telefono, dataConsent } = formData;

    // Email to customer
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "Confirmación de solicitud - Carpas Jireh",
      html: `
        <h1>Gracias por contactarnos, ${nombre}!</h1>
        <p>Hemos recibido tu solicitud para una ${tipoCarpa}.</p>
        <p>Nuestro equipo se pondrá en contacto contigo pronto.</p>
        <p>Datos de tu solicitud:</p>
        <ul>
          <li>Teléfono: ${telefono}</li>
          <li>Tipo de Carpa: ${tipoCarpa}</li>
        </ul>
      `,
    });

    // Email to admin
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "Nueva solicitud de carpa",
      html: `
        <h1>Nueva solicitud de cliente</h1>
        <p>Detalles del cliente:</p>
        <ul>
          <li>Nombre: ${nombre}</li>
          <li>Email: ${email}</li>
          <li>Teléfono: ${telefono}</li>
          <li>Tipo de Carpa: ${tipoCarpa}</li>
          <li>Aceptó tratamiento de datos: ${dataConsent ? "Sí" : "No"}</li>
        </ul>
      `,
    });

    return NextResponse.json(
      { message: "Emails sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
