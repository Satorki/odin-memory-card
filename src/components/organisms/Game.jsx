import GameInfo from "../molecules/GameInfo";
import Playground from "../molecules/Playground";
import { RandomData } from "../molecules/RandomData";
import { ScoreControl } from "../molecules/ScoreControl";
import { ShowCards } from "../molecules/ShowCards";

const Game = () => {
  return (
    <div className="flex flex-col items-center">
      <RandomData>
        <ShowCards>
          <ScoreControl>
            <Playground />
            <GameInfo />
          </ScoreControl>
        </ShowCards>
      </RandomData>
    </div>
  );
};

export default Game;
