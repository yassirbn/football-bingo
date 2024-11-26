import React, { useState } from "react";

const BingoGrid = ({ words }) => {
  const gridSize = 5; // 5x5 grid
  const totalCells = gridSize * gridSize;

  const initializeGrid = () => {
    const shuffledWords = [...words].sort(() => 0.5 - Math.random()).slice(0, totalCells);
    while (shuffledWords.length < totalCells) {
      shuffledWords.push("PLACEHOLDER");
    }
    shuffledWords[Math.floor(totalCells / 2)] = "FREE SPACE";
    return shuffledWords;
  };

  const [gridWords] = useState(initializeGrid);
  const [selectedCells, setSelectedCells] = useState(
    Array(totalCells).fill(false).map((_, i) => i === Math.floor(totalCells / 2))
  );
  const [bingo, setBingo] = useState(false);

  const handleCellClick = (index) => {
    if (gridWords[index] === "FREE SPACE" || selectedCells[index]) return;
    const updatedSelection = [...selectedCells];
    updatedSelection[index] = true;
    setSelectedCells(updatedSelection);
    checkForBingo(updatedSelection);
  };

  const checkForBingo = (selected) => {
    const checkLine = (line) => line.every((index) => selected[index]);
    const rows = Array.from({ length: gridSize }, (_, i) =>
      Array.from({ length: gridSize }, (_, j) => i * gridSize + j)
    );
    const cols = Array.from({ length: gridSize }, (_, i) =>
      Array.from({ length: gridSize }, (_, j) => j * gridSize + i)
    );
    const diagonal1 = Array.from({ length: gridSize }, (_, i) => i * gridSize + i);
    const diagonal2 = Array.from({ length: gridSize }, (_, i) => (i + 1) * gridSize - (i + 1));
    const lines = [...rows, ...cols, diagonal1, diagonal2];
    if (lines.some(checkLine)) {
      setBingo(true);
    }
  };

  return (
    <div className="p-4 relative h-screen bg-gray-100 flex flex-col items-center">
      {bingo && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
          <h2 className="text-7xl sm:text-8xl md:text-9xl font-hand text-red-500 animate-pulse">
            BINGO!
          </h2>
        </div>
      )}
      <h1 className="text-center text-2xl font-hand mb-4">5x5 Bingo Grid</h1>
      <div className="relative">
        {/* Grid Container */}
        <div
          className="grid grid-cols-5 grid-rows-5 relative w-full max-w-screen-sm"
          style={{
            gap: "0", // No gaps between cells
          }}
        >
          {gridWords.map((word, index) => (
            <div
              key={index}
              className={`flex items-center justify-center text-center font-medium font-hand aspect-square p-2
              ${
                selectedCells[index]
                  ? "bg-blue-200 text-white"
                  : "bg-gray-50 hover:bg-gray-200"
              }
              ${
                word === "FREE SPACE" ? "cursor-default font-bold" : "cursor-pointer"
              }
              relative transition-transform duration-200 ease-in-out ${
                word !== "FREE SPACE" ? "hover:-rotate-[3deg] hover:scale-105" : ""
              }`}
              onClick={() => handleCellClick(index)}
            >
              <span className="break-words text-sm sm:text-base md:text-lg lg:text-xl">
                {word}
              </span>
            </div>
          ))}
        </div>

        {/* Border for the grid */}
        <div
          className="absolute inset-0 border-black border-4 border-dotted"
          aria-hidden="true"
        ></div>
      </div>
    </div>
  );
};

export default BingoGrid;
