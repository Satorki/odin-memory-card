import { useContext } from "react";
import ScoreBest from "../atoms/ScoreBest";
import ScoreCurrent from "../atoms/ScoreCurrent";
import StartBtn from "../atoms/StartBtn";
import { ShowCardContext } from "./ShowCards";
import { ScoreControlContext } from "./ScoreControl";

const GameInfo = () => {
  const { handleReversedCard } = useContext(ShowCardContext);
  const { score, bestScore } = useContext(ScoreControlContext);

  return (
    <div className="flex justify-center items-center my-3 gap-10">
      <StartBtn showCards={handleReversedCard} />
      <ScoreCurrent score={score} />
      <ScoreBest bestScore={bestScore} />
    </div>
  );
};

export default GameInfo;
