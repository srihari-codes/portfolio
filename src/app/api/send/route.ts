import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import { z } from "zod";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TARGET_INBOX = process.env.TARGET_INBOX;

const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});
export async function POST(req: Request) {
  try {
    if (!RESEND_API_KEY || RESEND_API_KEY.includes("<<<PLACEHOLDER>>>")) {
      return Response.json(
        { error: "Resend API key is not configured." },
        { status: 500 }
      );
    }

    if (!TARGET_INBOX || TARGET_INBOX.includes("<<<PLACEHOLDER>>>")) {
      return Response.json(
        { error: "Target inbox is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(RESEND_API_KEY);
    const body = await req.json();
    console.log(body);
    const {
      success: zodSuccess,
      data: zodData,
      error: zodError,
    } = Email.safeParse(body);
    if (!zodSuccess)
      return Response.json({ error: zodError?.message }, { status: 400 });

    const { data: resendData, error: resendError } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [TARGET_INBOX],
      subject: "Contact me from portfolio",
      react: EmailTemplate({
        fullName: zodData.fullName,
        email: zodData.email,
        message: zodData.message,
      }),
    });

    if (resendError) {
      return Response.json({ resendError }, { status: 500 });
    }

    return Response.json(resendData);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
