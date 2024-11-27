import React from "react";
import BingoGrid from "./component/BingoGrid/BingoGrid";


const App = () => {
  const words  = [
    "What a save!",
    "Offside!",
    "Penalty!",
    "Pass!",
    "It's a dive!",
    "Red card!",
    "Goal!!",
    "Foul!",
    "Clear it!",
    "Nice touch!",
    "Tackle!",
    "Cross!",
    "Counterattack!",
    "Come on, ref!",
    "In the box!",
    "No way!!",
    "Good save!!",
    "What a ball!",
    "Hold it up!",
    "Get stuck in!",
    "Get back!",
    "Nice pass!",
    "In the space!",
    "Well played!",
    "Take a shot!",
  ];
  

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <BingoGrid words={words} />
    </div>
  );
};

export default App;
