import GameInfo from "../molecules/GameInfo";
import Playground from "../molecules/Playground";
import { RandomData } from "../molecules/RandomData";

const Game = () => {
  return (
    <div className="flex flex-col items-center">
      <RandomData>
        <Playground />
        <GameInfo />
      </RandomData>
    </div>
  );
};

export default Game;
