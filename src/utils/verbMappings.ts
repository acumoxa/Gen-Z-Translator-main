export interface VerbConjugation {
  present: string;
  past: string;
  presentParticiple: string;
}

export interface VerbMapping {
  standard: VerbConjugation;
  slang: VerbConjugation;
}

export interface VerbMappings {
  [key: string]: VerbMapping;
}

export const verbMappings: VerbMappings = {
  throw_with_force: {
    standard: {
      present: 'throw with force',
      past: 'threw with force',
      presentParticiple: 'throwing with force'
    },
    slang: {
      present: 'yeet',
      past: 'yeeted',
      presentParticiple: 'yeeting'
    }
  },
  // Add more verb mappings here
};