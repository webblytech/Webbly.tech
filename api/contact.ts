import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const {
      name,
      email,
      company,
      budget,
      message,
      projectTypes,
    } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        error: "Missing required fields.",
      });
    }

    await resend.emails.send({
      from: "Webbly <development@webbly.tech>",

      to: ["development@webbly.tech"],

      replyTo: email,

      subject: `New Website Enquiry (via contact form)- ${name}`,

      html: `
        <h2>New enquiry received</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Company:</strong> ${company || "Not provided"}</p>

        <p><strong>Budget:</strong> ${budget}</p>

        <p><strong>Project Types:</strong></p>

        <ul>
            ${
            (projectTypes ?? [])
                .map((x: string) => `<li>${x}</li>`)
                .join("")
            }
        </ul>

        <p><strong>Message</strong></p>

        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return res.status(200).json({
      success: true,
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      error: "Failed to send email.",
    });
  }
}