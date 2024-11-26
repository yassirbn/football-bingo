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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <BingoGrid words={words} />
    </div>
  );
};

export default App;
