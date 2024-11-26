import React, { useState } from "react";

const BingoGrid = ({ words }) => {
  const gridSize = 5;
  const totalCells = gridSize * gridSize;

  const initializeGrid = () => {
    const shuffledWords = [...words].sort(() => 0.5 - Math.random()).slice(0, totalCells);
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
    <div className="relative h-screen w-screen bg-gray-100 overflow-hidden flex flex-col items-center justify-center">
      {/* Fireworks and Bingo Animation */}
      {bingo && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
          <h1 className="text-6xl md:text-8xl font-bold text-red-500 animate-pulse mb-4">
            BINGO!
          </h1>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Firework Effects */}
            <div className="firework bg-red-400 animate-explode"></div>
            <div className="firework bg-blue-400 animate-explode delay-200"></div>
            <div className="firework bg-yellow-400 animate-explode delay-400"></div>
          </div>
        </div>
      )}

      {/* Title */}
      <h1 className="text-2xl font-hand text-gray-700 mb-4">Bingo Game</h1>

      {/* Bingo Grid */}
      <div
        className="relative grid gap-0"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
        }}
      >
        {gridWords.map((word, index) => (
          <div
            key={index}
            className={`relative flex items-center justify-center text-center font-medium font-hand aspect-square p-2 
              ${
                selectedCells[index]
                  ? "bg-blue-300 text-white"
                  : "bg-gray-50 hover:bg-gray-200"
              } 
              ${word === "FREE SPACE" ? "cursor-default font-bold" : "cursor-pointer"}
              transition-transform duration-200 ease-in-out ${
                word !== "FREE SPACE" ? "hover:scale-105" : ""
              }`}
            onClick={() => handleCellClick(index)}
            style={{
              borderRight:
                index % gridSize === gridSize - 1 ? "none" : "2px solid black",
              borderBottom:
                Math.floor(index / gridSize) === gridSize - 1
                  ? "none"
                  : "2px solid black",
            }}
          >
            <span className="break-words text-sm sm:text-base md:text-lg">
              {word}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BingoGrid;
