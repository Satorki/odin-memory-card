import ScoreBest from "../atoms/ScoreBest";
import ScoreCurrent from "../atoms/ScoreCurrent";
import StartBtn from "../atoms/StartBtn";

const GameInfo = () => {
  return (
    <div className="flex justify-center items-center my-3 gap-10">
      <StartBtn />
      <ScoreCurrent />
      <ScoreBest />
    </div>
  );
};

export default GameInfo;
