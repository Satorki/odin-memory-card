import { useContext } from "react";
import Card from "../atoms/Card";
import { RandomDataContext } from "./RandomData";
import { ShowCardContext } from "./ShowCards";

const Playground = () => {

  const { character } = useContext(RandomDataContext)
  const { reversedCard } = useContext(ShowCardContext)

  return <div className="mt-5 grid grid-cols-3 gap-3 items-center">
    <Card character={character[0]} reversedCard={reversedCard} />
    <Card character={character[1]} reversedCard={reversedCard} />
    <Card character={character[2]} reversedCard={reversedCard} />
    <Card character={character[3]} reversedCard={reversedCard} />
    <Card character={character[4]} reversedCard={reversedCard} />
    <Card character={character[5]} reversedCard={reversedCard} />
    <Card character={character[6]} reversedCard={reversedCard} />
    <Card character={character[7]} reversedCard={reversedCard} />
    <Card character={character[8]} reversedCard={reversedCard} />
  </div>;
};

export default Playground;
