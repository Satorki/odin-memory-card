import { useContext } from "react";
import Card from "../atoms/Card";
import { RandomDataContext } from "./RandomData";
import { ShowCardContext } from "./ShowCards";
import { ScoreControlContext } from "./ScoreControl";

const Playground = () => {
  const { character, shuffleCharacters } = useContext(RandomDataContext);
  const { reversedCard } = useContext(ShowCardContext);
  const { addScore, addScoredCharacters } = useContext(ScoreControlContext);

  return (
    <div className="mt-5 grid grid-cols-3 gap-3 items-center">
      {character.map((char, index) => (
        <Card
          key={index}
          character={char}
          reversedCard={reversedCard}
          shuffleCharacters={shuffleCharacters}
          addScore={addScore}
          addScoredCharacters={addScoredCharacters}
        />
      ))}
    </div>
  );
};

export default Playground;
