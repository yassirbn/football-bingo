import React, { useState } from "react";
import "./BingoGrid.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const BingoGrid = ({ words }) => {
  const gridSize = 5; // 5x5 grid
  const totalCells = gridSize * gridSize;

  const initializeGrid = (wordList) => {
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

  const [gridWords, setGridWords] = useState(initializeGrid(words));
  const [selectedCells, setSelectedCells] = useState(
    Array(totalCells)
      .fill(false)
      .map((_, i) => i === Math.floor(totalCells / 2))
  );
  const [bingo, setBingo] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [newWords, setNewWords] = useState(Array(25).fill(""));

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

    if (lines.some(checkLine)) {
      setBingo(true);
    }
  };

  const resetGame = () => {
    setShowModal(true);
  };

  const handleNewGame = () => {
    const validWords = newWords.filter((word) => word.trim().length > 0);
    if (validWords.length < 25) {
      alert("Please fill in all 25 words.");
      return;
    }

    setGridWords(initializeGrid(validWords));
    setSelectedCells(
      Array(totalCells)
        .fill(false)
        .map((_, i) => i === Math.floor(totalCells / 2))
    );
    setBingo(false);
    setShowModal(false);
    setNewWords(Array(25).fill(""));
  };

  const handlePlayWithRandom = () => {
    setGridWords(initializeGrid(words));
    setSelectedCells(
      Array(totalCells)
        .fill(false)
        .map((_, i) => i === Math.floor(totalCells / 2))
    );
    setBingo(false);
    setShowModal(false);
  };

  const allWordsEntered = newWords.every((word) => word.trim().length > 0);

  return (
    <div className="relative h-screen overflow-hidden contents">
      {bingo && (
        <>
          <div className="absolute inset-0 z-20 flex justify-center items-center pointer-events-none overflow-hidden">
            {Array.from({ length: 300 }).map((_, idx) => (
              <div
                key={idx}
                className="fireworks-particle w-4 h-4 rounded-full absolute animate-fireworks"
                style={{
                  "--x": `${Math.random() * 120 - 60}vw`,
                  "--y": `${Math.random() * 120 - 60}vh`,
                  "--size": `${Math.random() * 10 + 5}px`,
                  "--duration": `${Math.random() * 2 + 1.5}s`,
                  "--delay": `${Math.random() * 0.5}s`,
                  backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              ></div>
            ))}
          </div>

          <DotLottieReact
            src="https://lottie.host/732933df-87a0-491e-a390-ede63ec734e4/cPvVkDCZ6t.lottie"
            loop
            autoplay
            className="tada-right"
          />
          <DotLottieReact
            src="https://lottie.host/732933df-87a0-491e-a390-ede63ec734e4/cPvVkDCZ6t.lottie"
            loop
            autoplay
            className="tada-left"
          />
        </>
      )}

      {bingo && (
        <div className="absolute inset-0 flex items-center justify-center z-10 animate-bingo-fade">
          <h2 className="text-7xl sm:text-8xl md:text-9xl lg:text-10xl font-extrabold text-red-600 animate-bingo-shake">
            BINGO!
          </h2>
        </div>
      )}

      {bingo && ( <>
        <div className="absolute inset-x-0 bottom-[11.5rem] flex justify-center z-30 space-x-4 font-extrabold text-2xl">Play again ?</div>
        <div className="absolute inset-x-0 bottom-20 flex justify-center z-30 space-x-4">
           
          <button
            onClick={resetGame}
            className="px-8 py-4 bg-blue-600 text-white rounded-lg shadow-lg text-lg font-bold hover:bg-blue-700"
          >
          with custom words
          </button>
          <button
            onClick={handlePlayWithRandom}
            className="px-8 py-4 bg-green-600 text-white rounded-lg shadow-lg text-lg font-bold hover:bg-green-700"
          >
           with random words
          </button>
        </div></>
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
              className={`${
                selectedCells[index] ? "selected" : "bg-transparent"
              } flex items-center justify-center py-3  sm:py-4 sm:px-8 md:py-6 lg:py-8 md:break-normal overflow-hidden grid-width md:desktop-width`}  
            >
              <span
                className={`text-xs sm:text-sm md:text-base lg:text-lg font-bold text-black gird-word w-full break-words ${
                  selectedCells[index] ? "text-white" : "text-black"
                }`}
              >
                {word}
              </span>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white rounded-lg p-4 max-w-md w-full max-h-screen overflow-y-auto">
            <h3 className="text-2xl font-bold mb-4">Enter 25 New Words</h3>
            <div className="grid grid-cols-2 gap-2">
              {newWords.map((word, index) => (
                <input
                  key={index}
                  type="text"
                  value={word}
                  onChange={(e) =>
                    setNewWords(
                      newWords.map((w, i) => (i === index ? e.target.value : w))
                    )
                  }
                  className="border rounded-lg p-2 w-full"
                  placeholder={`Word ${index + 1}`}
                />
              ))}
            </div>
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleNewGame}
                disabled={!allWordsEntered}
                className={`px-4 py-2 rounded-lg ${
                  allWordsEntered
                    ? "bg-blue-600 text-white"
                    : "bg-blue-300 text-gray-200"
                }`}
              >
                Start Game
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BingoGrid;
