export const calculateWPM = (wordsTyped: number, minutes: number): number => {
  if (minutes === 0) return 0;
  return Math.round(wordsTyped / minutes);
};

export const calculateAccuracy = (mistakes: number, totalWords: number): number => {
  if (totalWords === 0) return 100;
  return Math.round(((totalWords - mistakes) / totalWords) * 100);
};
