/** Semantic suit names in data; Unicode glyphs only at the display boundary. */
export const suitSymbols = {
  spades: '\u2660',
  hearts: '\u2665',
  clubs: '\u2663',
  diamonds: '\u2666',
} as const;

export type Suit = keyof typeof suitSymbols;
