import { createContext, useState } from "react";

const ScoreControlContext = createContext();

const ScoreControl = ({ children }) => {
  const [scoredCharacters, setScoredCharacters] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const addScoredCharacters = (e) => {
    setScoredCharacters((prev) => [...prev, e.target.alt]);
  };

  const addScore = (e) => {
    if (!scoredCharacters.includes(e.target.alt)) {
      setScore(score + 1);
    } else {
      setScore(0);
      if (score > bestScore) {
        setBestScore(score);
      }
      setScoredCharacters([]);
    }
  };

  const restartGame = () => {
    setScore(0);
    if (score > bestScore) {
      setBestScore(score);
    }
    setScoredCharacters([]);
  };

  return (
    <ScoreControlContext.Provider
      value={{ score, addScore, addScoredCharacters, bestScore, restartGame }}
    >
      {children}
    </ScoreControlContext.Provider>
  );
};

export { ScoreControl, ScoreControlContext };
