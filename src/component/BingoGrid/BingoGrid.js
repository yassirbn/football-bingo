import React, { useState } from "react";
import "./BingoGrid.css";
import { initializeSelected } from "../../services/GridServices";
import BingoAnimation from "../BingoAnimation/BingoAnimation";


const gridSize = 5;
const totalCells = gridSize * gridSize;

const initializeGrid = (wordList) => {
  const centerIndex = Math.floor(totalCells / 2);
  const shuffledWords = [...wordList]
    .sort(() => 0.5 - Math.random())
    .slice(0, totalCells);

  while (shuffledWords.length < totalCells) {
    shuffledWords.push("placeholder");
  }

  shuffledWords[centerIndex] = "FREE SLOT";

  return shuffledWords;
};

const BingoGrid = ({ words }) => {
  const [gridWords, setGridWords] = useState(initializeGrid(words));
  const [selectedCells, setSelectedCells] = useState(
    initializeSelected(totalCells)
  );
  const [bingo, setBingo] = useState(false);
  const [completedLines, setCompletedLines] = useState([]);

  const handleCellClick = (index) => {
    if (gridWords[index] === "free slot 🎉" || selectedCells[index]) return;

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
    const diagonal1 = Array.from(
      { length: gridSize },
      (_, i) => i * gridSize + i
    );
    const diagonal2 = Array.from(
      { length: gridSize },
      (_, i) => (i + 1) * gridSize - (i + 1)
    );
    const lines = [...rows, ...cols, diagonal1, diagonal2];
    lines.forEach((line) => {
      console.log(
        line,
        completedLines.some(
          (completedLine) =>
            JSON.stringify(completedLine) === JSON.stringify(line)
        )
      );
      const lineAlreadyCompleted = completedLines.some(
        (completedLine) =>
          JSON.stringify(completedLine) === JSON.stringify(line)
      );
      if (checkLine(line) && !lineAlreadyCompleted) {
        setCompletedLines([...completedLines, line]);
        setBingo(true);
      }
    });
  };

  const handleContinue = () => {
    setBingo(false);
  };

  const handlePlayAgain = () => {
    setGridWords(initializeGrid(words));
    setSelectedCells(initializeSelected(totalCells));
    setBingo(false);
    setCompletedLines([]);
  };

  return (
    <div className="relative h-screen overflow-hidden contents">
      {bingo && (
        <BingoAnimation
          handleContinue={handleContinue}
          handlePlayAgain={handlePlayAgain}
        />
      )}

      <div
        className="grid pt-5"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
        }}
      >
        {gridWords.map((word, index) => (
          <div
            key={index}
            className={`flex items-center justify-center border-b border-l border-t border-r border-gray-700 text-center font-medium aspect-square
              ${
                selectedCells[index]
                  ? "selected text-white"
                  : "bg-[#efffe6e8] hover:bg-blue-200 cursor-pointer"
              }
              ${word === "FREE SPACE" ? "cursor-default" : ""}`}
            onClick={() => handleCellClick(index)}
          >
            <div
              className={`$ {
                selectedCells[index] ? "selected" : "bg-transparent"
              } flex items-center justify-center py-3 sm:py-4 sm:px-4 md:py-6 lg:py-8 md:break-normal overflow-hidden grid-width md:desktop-width`}
            >
              <span
                className={`text-xs sm:text-sm md:text-sm lg:text-sm font-bold text-black gird-word w-full break-words ${
                  selectedCells[index] ? "text-white" : "text-black"
                }`}
              >
                {word}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BingoGrid;
