export const initializeGrid = (wordList, totalCells) => {
  const shuffledWords = [...wordList]
    .sort(() => 0.5 - Math.random())
    .slice(0, totalCells);

  while (shuffledWords.length < totalCells) {
    shuffledWords.push("placeholder");
  }

  const centerIndex = Math.floor(totalCells / 2);
  shuffledWords[centerIndex] = "free slot 🎉";

  return shuffledWords;
};

export const initializeSelected = (totalCells) => {
  return Array(totalCells)
    .fill(false)
    .map((_, i) => i === Math.floor(totalCells / 2));
};
