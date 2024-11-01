import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { term, meaning, generation, context, email } = req.body;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "support@genzdecoded.com",
      subject: "New Slang Term Submission",
      text: `
        New Slang Term Submission:
        
        Term: ${term}
        Generation: ${generation}
        Meaning: ${meaning}
        Context: ${context}
        Submitted by: ${email || 'Anonymous'}
      `,
      html: `
        <h2>New Slang Term Submission</h2>
        <p><strong>Term:</strong> ${term}</p>
        <p><strong>Generation:</strong> ${generation}</p>
        <p><strong>Meaning:</strong> ${meaning}</p>
        <p><strong>Context:</strong> ${context}</p>
        <p><strong>Submitted by:</strong> ${email || 'Anonymous'}</p>
      `
    });

    return res.status(200).json({ message: 'Suggestion submitted successfully' });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ error: 'Failed to submit suggestion' });
  }
}