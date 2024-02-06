
import EmailTemplate from '@/components/Email-Template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['85999bbc@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate(),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
