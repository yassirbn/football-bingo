import React, { useState } from "react";

const BingoGrid = ({ words }) => {
  const gridSize = 5; // 5x5 grid
  const totalCells = gridSize * gridSize;

  // Shuffle words only once and store in state
  const initializeGrid = () => {
    const shuffledWords = [...words].sort(() => 0.5 - Math.random()).slice(0, totalCells);

    // Fill with placeholders if not enough words
    while (shuffledWords.length < totalCells) {
      shuffledWords.push("PLACEHOLDER");
    }

    // Replace the center cell with "FREE SPACE"
    const centerIndex = Math.floor(totalCells / 2);
    shuffledWords[centerIndex] = "FREE SPACE";

    return shuffledWords;
  };

  const [gridWords] = useState(initializeGrid);
  const [selectedCells, setSelectedCells] = useState(
    Array(totalCells).fill(false).map((_, i) => i === Math.floor(totalCells / 2)) // Center (FREE SPACE) is pre-selected
  );
  const [bingo, setBingo] = useState(false);

  // Handle cell click
  const handleCellClick = (index) => {
    if (gridWords[index] === "FREE SPACE" || selectedCells[index]) return; // Ignore clicks on FREE SPACE or already selected cells

    const updatedSelection = [...selectedCells];
    updatedSelection[index] = true;
    setSelectedCells(updatedSelection);

    // Check for Bingo
    checkForBingo(updatedSelection);
  };

  // Check for Bingo
  const checkForBingo = (selected) => {
    const checkLine = (line) => line.every((index) => selected[index]);

    // Generate all rows, columns, and diagonals
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
      setBingo(true); // Set Bingo to true to trigger animations
    }
  };

  return (
    <div className="p-4 relative h-screen overflow-hidden">
      {/* Fireworks Animation */}
      {bingo && (
        <div className="absolute inset-0 z-20 flex justify-center items-center pointer-events-none">
          {/* Firework Particles */}
          {Array.from({ length: 300 }).map((_, idx) => (
            <div
              key={idx}
              className="fireworks-particle w-4 h-4 rounded-full absolute animate-fireworks"
              style={{
                "--x": `${Math.random() * 120 - 60}vw`, // Expanded X direction
                "--y": `${Math.random() * 120 - 60}vh`, // Expanded Y direction
                "--size": `${Math.random() * 10 + 5}px`, // Random size (larger particles)
                "--duration": `${Math.random() * 2 + 1.5}s`, // Increased duration for longer explosion
                "--delay": `${Math.random() * 0.5}s`, // Random delay
                backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`, // Random color (HSL)
                transform: `rotate(${Math.random() * 360}deg)` // Random rotation for more chaos
              }}
            ></div>
          ))}
        </div>
      )}

      {/* Bingo Text Animation */}
      {bingo && (
        <div className="absolute inset-0 flex items-center justify-center z-10 animate-bingo-fade">
          <h2 className="text-7xl sm:text-8xl md:text-9xl lg:text-10xl font-extrabold text-red-600 animate-bingo-shake">
            BINGO!
          </h2>
        </div>
      )}

      {/* Bingo Grid */}
      <h1 className="text-center text-2xl font-bold mb-4">5x5 Bingo Grid</h1>
      <div
        className="grid gap-2"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, minmax(50px, 1fr))`,
        }}
      >
        {gridWords.map((word, index) => (
          <div
            key={index}
            className={`flex items-center justify-center border-2 rounded-md text-center font-medium aspect-square p-2
              ${
                selectedCells[index]
                  ? "bg-blue-300 text-white"
                  : "bg-gray-100 hover:bg-blue-200 cursor-pointer"
              } ${word === "FREE SPACE" ? "cursor-default" : ""}
            `}
            onClick={() => handleCellClick(index)}
          >
            <span
              className={`break-words text-xs sm:text-sm md:text-base lg:text-lg ${
                word === "FREE SPACE" ? "font-bold italic" : ""
              }`}
            >
              {word}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BingoGrid;
