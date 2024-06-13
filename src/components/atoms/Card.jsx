const Card = ({
  character,
  reversedCard,
  shuffleCharacters,
  addScore,
  addScoredCharacters,
}) => {
  const shuffleAndScore = (e) => {
    shuffleCharacters();
    addScoredCharacters(e);
    addScore(e);
  };

  return (
    <>
      {reversedCard ? (
        <div
          className="w-40 h-32 bg-gradient-to-bl from-teal-500 to-teal-600 rounded-xl shadow-lg flex items-center"
          onClick={(e) => shuffleAndScore(e)}
        >
          <img
            className="rounded-xl"
            src={character.images[0]}
            alt={character.name}
          />
        </div>
      ) : (
        <div className="w-40 h-32 bg-gradient-to-bl from-teal-500 to-teal-600 rounded-xl shadow-lg"></div>
      )}
    </>
  );
};

export default Card;
