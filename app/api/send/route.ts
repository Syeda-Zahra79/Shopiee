
import EmailTemplate from '@/components/Email-Template';
import { Resend } from 'resend';

const resend = new Resend("re_j6mFZVqA_HNB7YaKKXDtXwQhhiPnRZvzN");

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['85999bbc@gmail.com'],
      subject: 'Shopping Receipt',
      react: EmailTemplate(),
    });

    return Response.json(data);
  } catch (error) {
    console.log("Error : ", error);
    return Response.json({ error });
  }
}
