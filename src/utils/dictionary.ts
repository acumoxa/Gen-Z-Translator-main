import { glossaryTerms } from '../data/glossaryTerms';
import { getUrbanDictionaryDefinition } from './urban-dictionary';
import { commonAbbreviations, generationDictionaries, Generation } from './dictionaryData';

export async function findDefinition(term: string, fromGeneration?: Generation): Promise<string> {
  const normalizedTerm = term.toLowerCase();

  // First check common abbreviations
  if (commonAbbreviations[normalizedTerm]) {
    return commonAbbreviations[normalizedTerm];
  }

  // Then check generation-specific dictionaries
  if (fromGeneration && generationDictionaries[fromGeneration][normalizedTerm]) {
    return generationDictionaries[fromGeneration][normalizedTerm];
  }

  // Then check internal glossary
  const glossaryMatch = glossaryTerms.find(
    entry => entry.term.toLowerCase() === normalizedTerm
  );
  
  if (glossaryMatch) {
    return glossaryMatch.definition;
  }

  // If not found in any internal dictionaries, try Urban Dictionary
  try {
    const urbanDefinition = await getUrbanDictionaryDefinition(term);
    return urbanDefinition || term;
  } catch (error) {
    console.warn(`Definition not found for term: ${term}`);
    return term;
  }
}