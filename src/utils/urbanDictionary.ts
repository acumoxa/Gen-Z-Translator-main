const API_BASE_URL = '/api/urban-dictionary';

export const fetchUrbanDictionary = async (term: string): Promise<string> => {
  if (!term?.trim()) {
    return '';
  }

  try {
    const response = await fetch(`${API_BASE_URL}?term=${encodeURIComponent(term.trim())}`);
    
    if (!response.ok) {
      if (response.status === 404) {
        return '';
      }
      throw new Error(`Failed to fetch definition (${response.status})`);
    }

    const data = await response.json();
    return data.definition || '';
  } catch (error) {
    console.warn('Urban Dictionary lookup failed:', 
      error instanceof Error ? error.message : 'Unknown error');
    return '';
  }
};