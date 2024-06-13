import GameInfo from "../molecules/GameInfo";
import Playground from "../molecules/Playground";
import { RandomData } from "../molecules/RandomData";
import { ShowCards } from "../molecules/ShowCards";

const Game = () => {
  return (
    <div className="flex flex-col items-center">
      <RandomData>
        <ShowCards>
        <Playground />
        <GameInfo />
        </ShowCards>
      </RandomData>
    </div>
  );
};

export default Game;
