import React from "react";
import BingoGrid from "./component/BingoGrid/BingoGrid";


const App = () => {
  const words  = [
    "its a steal!",
    "Offside!",
    "Penalty!",
    "Pass!",
    "Its a dive!",
    "Red !!",
    "Goal!!",
    "Foul!",
    "Clear!",
    "Nice!!",
    "Tackle!",
    "Cross!",
    "Counter!",
    "ref!!",
    "In the box!",
    "No way!!",
    "Good save!!",
    "defense!",
    "Hold it up!",
    "VAR!",
    "Get back!",
    "Nice pass!",
    "Run!",
    "Well played!",
    "Shoot!",
  ];
  

  return (
    <div className="min-h-screen flex items-center justify-center">
      <BingoGrid words={words} />
    </div>
  );
};

export default App;
