import OpenAI from 'openai';

let openaiClient: OpenAI | null = null;

export const initializeOpenAI = (apiKey: string) => {
  openaiClient = new OpenAI({
    apiKey,
    dangerouslyAllowBrowser: true // Note: In production, API calls should go through a backend
  });
};

export const translateWithAI = async (
  text: string,
  generation: string,
  direction: 'toModern' | 'fromModern'
): Promise<string> => {
  if (!openaiClient) {
    throw new Error('OpenAI client not initialized');
  }

  const prompt = direction === 'toModern'
    ? `Translate this ${generation} slang to modern standard English: "${text}"`
    : `Translate this modern English to ${generation} slang: "${text}"`;

  try {
    const response = await openaiClient.chat.completions.create({
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

    return response.choices[0]?.message?.content || 'Translation failed';
  } catch (error) {
    console.error('OpenAI translation error:', error);
    throw new Error('Translation failed');
  }
};