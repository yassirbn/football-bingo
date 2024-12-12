export const initializeSelected = (totalCells) => {
  return Array(totalCells)
    .fill(false)
    .map((_, i) => i === Math.floor(totalCells / 2));
};
