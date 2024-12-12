import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";
import "./BingoAnimation.css";
export default function BingoAnimation({ handleContinue, handlePlayAgain }) {
  return (
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

      <div className="absolute inset-0 flex items-center justify-center z-10 animate-bingo-fade">
        <h2 className="text-7xl sm:text-8xl md:text-9xl lg:text-10xl font-extrabold text-red-600 animate-bingo-shake">
          BINGO!
        </h2>
      </div>
      <div className="absolute inset-x-0 bottom-20 flex justify-center z-30 space-x-4">
        <button
          onClick={handleContinue}
          className="px-8 py-4 bg-blue-600 text-white rounded-lg shadow-lg text-lg font-bold hover:bg-blue-700"
        >
          Continue
        </button>
        <button
          onClick={handlePlayAgain}
          className="px-8 py-4 bg-green-600 text-white rounded-lg shadow-lg text-lg font-bold hover:bg-green-700"
        >
          Play Again
        </button>
      </div>
    </>
  );
}
