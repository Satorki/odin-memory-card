import { useContext } from "react";
import ScoreBest from "../atoms/ScoreBest";
import ScoreCurrent from "../atoms/ScoreCurrent";
import StartBtn from "../atoms/StartBtn";
import { ShowCardContext } from "./ShowCards";

const GameInfo = () => {
  const { handleReversedCard } = useContext(ShowCardContext);

  return (
    <div className="flex justify-center items-center my-3 gap-10">
      <StartBtn showCards={handleReversedCard} />
      <ScoreCurrent />
      <ScoreBest />
    </div>
  );
};

export default GameInfo;
