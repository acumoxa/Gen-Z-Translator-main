import OpenAI from 'openai';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { text, generation, direction } = req.body;

    if (!text || !generation || !direction) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    const prompt = direction === 'toModern'
      ? `Translate this ${generation} slang to modern standard English: "${text}"`
      : `Translate this modern English to ${generation} slang: "${text}"`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are a translator specializing in converting between ${generation} slang and modern standard English. Provide direct translations without explanations.`
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 150
    });

    const translation = completion.choices[0]?.message?.content || 'Translation failed';
    return res.status(200).json({ translation });
  } catch (error) {
    console.error('Translation error:', error);
    return res.status(500).json({ error: 'Translation failed' });
  }
}