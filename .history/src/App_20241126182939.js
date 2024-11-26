import React from "react";
import BingoGrid from "./component/BingoGrid/BingoGrid";


const App = () => {
  const words  = [
    "What a save!",
    "Offside!",
    "Penalty! Oh, no!",
    "Pass the ball!",
    "That's a dive!",
    "Red card!",
    "Goal! What a strike!",
    "He's on fire!",
    "Foul!",
    "Clear it!",
    "He's through on goal!",
    "Nice touch!",
    "What a tackle!",
    "Great cross!",
    "Counterattack!",
    "He’s injured!",
    "Come on, ref!",
    "Get it in the box!",
    "Keeper's got it!",
    "That's a foul!",
    "No way! That’s a dive!",
    "Good save, keeper!",
    "What a ball!",
    "Hold it up!",
    "Look at that footwork!",
    "Get stuck in!",
    "That’s a booking!",
    "Lovely ball over the top!",
    "That’s a terrible miss!",
    "Get back!",
    "Play to the whistle!",
    "It's all square!",
    "Time for a substitution!",
    "They’re all over them!",
    "Nice pass!",
    "He’s got space!",
    "He’s wide open!",
    "Well played!",
    "Take a shot!",
    "That’s a brilliant goal!",
    "What a finish!",
    "Come on, lads!",
    "Don't give up!",
    "He's made a run!",
    "Get the ball out of there!",
    "Hold the line!",
    "He’s been booked!",
    "That's a red card!",
    "This could be it!",
    "He’s in the clear!",
    "It’s a goal kick!",
    "That's a free kick!",
    "Shoot! Shoot!",
    "That's too easy!",
    "They've got to do better!",
    "He's off the ball!",
    "Put it in the back of the net!",
    "This is getting tense!",
    "He’s looking dangerous!",
    "Don’t give away possession!",
    "He’s gone down easy!",
    "That's a top save!",
    "This is the one!",
    "Make it count!"
  ];
  

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <BingoGrid words={words} />
    </div>
  );
};

export default App;
