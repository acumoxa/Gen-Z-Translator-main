import axios from 'axios';

const RAPID_API_KEY = import.meta.env.VITE_RAPID_API_KEY;
const RAPID_API_HOST = 'urban-dictionary7.p.rapidapi.com';

interface UrbanDictionaryDefinition {
  definition: string;
  permalink: string;
  thumbs_up: number;
  author: string;
  word: string;
  defid: number;
  current_vote: string;
  written_on: string;
  example: string;
  thumbs_down: number;
}

interface UrbanDictionaryResponse {
  list: UrbanDictionaryDefinition[];
}

export const getUrbanDictionaryDefinition = async (term: string): Promise<string> => {
  if (!RAPID_API_KEY) {
    console.warn('Urban Dictionary API key not configured');
    return '';
  }

  try {
    const response = await axios.get<UrbanDictionaryResponse>('https://urban-dictionary7.p.rapidapi.com/v0/define', {
      params: { term },
      headers: {
        'X-RapidAPI-Key': RAPID_API_KEY,
        'X-RapidAPI-Host': RAPID_API_HOST,
      },
    });

    if (response.data && response.data.list && response.data.list.length > 0) {
      // Sort by thumbs up to get the most popular definition
      const sortedDefinitions = response.data.list.sort((a, b) => b.thumbs_up - a.thumbs_up);
      return sortedDefinitions[0].definition.split('\n')[0]; // Get first line of definition
    }
    
    return '';
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 429) {
        console.warn('Rate limit exceeded for Urban Dictionary API');
        return '';
      }
      if (error.response?.status === 401 || error.response?.status === 403) {
        console.warn('Urban Dictionary API authentication failed');
        return '';
      }
    }
    console.warn('Failed to fetch Urban Dictionary definition:', error);
    return '';
  }
};