import React from "react";

const BingoGrid = ({ words }) => {
  // Ensure the grid is 5x5 by using exactly 25 words
  const gridSize = 5;
  const totalCells = gridSize * gridSize;

  // Shuffle and ensure we have exactly 25 items
  const shuffledWords = [...words]
    .sort(() => 0.5 - Math.random())
    .slice(0, totalCells);

  // Fill with placeholders if not enough words
  while (shuffledWords.length < totalCells) {
    shuffledWords.push("FREE SPACE");
  }

  return (
    <div className="p-4">
      <h1 className="text-center text-2xl font-bold mb-4">5x5 Bingo Grid</h1>
      <div
        className="grid gap-2"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize}, 1fr)`,
        }}
      >
        {shuffledWords.map((word, index) => (
          <div
            key={index}
            className="flex items-center justify-center border-2 border-gray-300 rounded-md p-4 bg-gray-100 hover:bg-blue-200 cursor-pointer text-center font-medium"
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BingoGrid;
