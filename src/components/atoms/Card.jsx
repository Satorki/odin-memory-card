const Card = ({ character, reversedCard }) => {

  return (
    <>
      {reversedCard ?
      <img
        className="w-40 rounded-xl shadow-lg"
        src={character.images[0]}
        alt={character.name}
      />
      :<div className="w-40 h-28 bg-gradient-to-bl from-teal-500 to-teal-600 rounded-xl shadow-lg"></div>}
    </>
  );
};

export default Card;
