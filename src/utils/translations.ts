import { Generation, generationStyles } from './generationStyles';
import { verbMappings } from './verbMappings';
import { findDefinition } from './dictionary';

// Helper function to detect verb tense and form
function detectVerbPattern(text: string, fromGeneration: Generation): { 
  baseVerb: string; 
  tense: keyof typeof verbMappings[string]['standard']; 
  matchedText: string; 
} | null {
  const isSlang = ['genz', 'gena'].includes(fromGeneration);
  const words = text.toLowerCase().split(/\s+/);

  for (const [baseVerb, mapping] of Object.entries(verbMappings)) {
    const forms = isSlang ? mapping.slang : mapping.standard;
    
    for (const [tense, form] of Object.entries(forms)) {
      const formWords = form.toLowerCase().split(/\s+/);
      
      for (let i = 0; i <= words.length - formWords.length; i++) {
        const slice = words.slice(i, i + formWords.length).join(' ');
        if (slice === form.toLowerCase()) {
          return {
            baseVerb,
            tense: tense as keyof typeof mapping.standard,
            matchedText: words.slice(i, i + formWords.length).join(' ')
          };
        }
      }
    }
  }
  return null;
}

// Helper function to get the appropriate verb form
function getVerbForm(
  baseVerb: string,
  tense: keyof typeof verbMappings[string]['standard'],
  toGeneration: Generation
): string {
  const mapping = verbMappings[baseVerb];
  if (!mapping) return '';

  return ['genz', 'gena'].includes(toGeneration)
    ? mapping.slang[tense]
    : mapping.standard[tense];
}

// Helper function to apply generation-specific styling
function applyGenerationStyle(text: string, generation: Generation): string {
  const style = generationStyles[generation];
  let result = text;

  if (style.usesProperCapitalization) {
    result = result.replace(/(?:^|\.\s+)([a-z])/g, (match) => match.toUpperCase());
    result = result.replace(/\bi\b/g, 'I');
  } else {
    result = result.toLowerCase();
  }

  if (style.usesContractions) {
    result = result
      .replace(/I am/gi, "I'm")
      .replace(/that is/gi, "that's")
      .replace(/it is/gi, "it's");
  } else {
    result = result
      .replace(/I'm/gi, "I am")
      .replace(/that's/gi, "that is")
      .replace(/it's/gi, "it is");
  }

  if (!style.usesProperPunctuation) {
    result = result.replace(/[,;:]/, '');
  }

  if (style.usesPeriodAtEnd && !result.match(/[.!?]$/)) {
    result += '.';
  }

  if (style.usesMultiplePunctuation) {
    result = result
      .replace(/!(?!!)/g, '!!')
      .replace(/\?(?!\?)/g, '??');
  }

  return result;
}

// Main translation function
export async function translateText(
  input: string,
  fromGeneration: Generation,
  toGeneration: Generation
): Promise<string> {
  if (!input?.trim()) {
    return '';
  }

  try {
    // First, check for verb patterns in the entire input
    const verbPattern = detectVerbPattern(input, fromGeneration);
    if (verbPattern) {
      const { baseVerb, tense, matchedText } = verbPattern;
      const translatedVerb = getVerbForm(baseVerb, tense, toGeneration);
      if (translatedVerb) {
        const result = input.replace(new RegExp(matchedText, 'i'), translatedVerb);
        return applyGenerationStyle(result, toGeneration);
      }
    }

    // If no verb pattern found, process word by word
    const words = input.split(/\s+/);
    const translatedWords = await Promise.all(
      words.map(async (word) => {
        try {
          const definition = await findDefinition(word.toLowerCase(), fromGeneration);
          return definition || word;
        } catch (error) {
          console.warn(`Translation failed for word: ${word}`, error);
          return word;
        }
      })
    );

    const result = translatedWords.join(' ');
    return applyGenerationStyle(result, toGeneration);
  } catch (error) {
    console.error('Translation error:', error);
    // Return original text if translation fails
    return input;
  }
}