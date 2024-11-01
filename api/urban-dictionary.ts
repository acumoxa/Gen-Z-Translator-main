import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { term } = req.query;
  const RAPID_API_KEY = process.env.RAPID_API_KEY;

  if (!term || typeof term !== 'string' || !term.trim()) {
    return res.status(400).json({ error: 'Valid term is required' });
  }

  if (!RAPID_API_KEY) {
    return res.status(503).json({ error: 'Service unavailable' });
  }

  try {
    const response = await fetch(
      `https://urban-dictionary7.p.rapidapi.com/v0/define?term=${encodeURIComponent(term.trim())}`,
      {
        headers: {
          'X-RapidAPI-Key': RAPID_API_KEY,
          'X-RapidAPI-Host': 'urban-dictionary7.p.rapidapi.com'
        }
      }
    );

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.list?.length) {
      return res.status(404).json({ error: 'Definition not found' });
    }

    // Sort by thumbs up and get the most popular definition
    const sortedDefinitions = data.list.sort((a, b) => b.thumbs_up - a.thumbs_up);
    const definition = sortedDefinitions[0].definition
      .split('\n')[0]
      .replace(/[\[\]]/g, '')
      .trim()
      .slice(0, 200); // Limit definition length

    return res.status(200).json({ definition });
  } catch (error) {
    console.error('Urban Dictionary API error:', error);
    return res.status(500).json({ 
      error: 'Failed to fetch definition',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}