export type Generation = 'genz' | 'millennial' | 'genx' | 'boomer' | 'gena';

interface GenerationStyle {
  usesProperCapitalization: boolean;
  usesProperPunctuation: boolean;
  usesPeriodAtEnd: boolean;
  usesMultiplePunctuation: boolean;
  usesContractions: boolean;
}

export const generationStyles: Record<Generation, GenerationStyle> = {
  genz: {
    usesProperCapitalization: false,
    usesProperPunctuation: false,
    usesPeriodAtEnd: false,
    usesMultiplePunctuation: true,
    usesContractions: true
  },
  gena: {
    usesProperCapitalization: false,
    usesProperPunctuation: false,
    usesPeriodAtEnd: false,
    usesMultiplePunctuation: true,
    usesContractions: true
  },
  millennial: {
    usesProperCapitalization: true,
    usesProperPunctuation: false,
    usesPeriodAtEnd: true,
    usesMultiplePunctuation: true,
    usesContractions: true
  },
  genx: {
    usesProperCapitalization: true,
    usesProperPunctuation: true,
    usesPeriodAtEnd: true,
    usesMultiplePunctuation: false,
    usesContractions: false
  },
  boomer: {
    usesProperCapitalization: true,
    usesProperPunctuation: true,
    usesPeriodAtEnd: true,
    usesMultiplePunctuation: false,
    usesContractions: false
  }
};