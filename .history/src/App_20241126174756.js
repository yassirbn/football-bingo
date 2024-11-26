import React from "react";
import BingoGrid from "./component/BingoGrid/BingoGrid";


const App = () => {
  const words = [
    "React", "JavaScript", "CSS", "HTML", "Tailwind", 
    "Redux", "API", "NodeJS", "Express", "MongoDB",
    "GraphQL", "TypeScript", "Hooks", "Context", "Webpack",
    "Babel", "Git", "NPM", "Yarn", "ESLint",
    "Prettier", "Testing", "Axios", "VSCode", "Debugging"
  ];

  return (
    <>
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
  <div className="firework bg-red-400 animate-explode"></div>
  <div className="firework bg-blue-400 animate-explode delay-200"></div>
  <div className="firework bg-yellow-400 animate-explode delay-400"></div>
</div>
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <BingoGrid words={words} />
    </div>
    </>
  );
};

export default App;
