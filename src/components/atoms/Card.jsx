const Card = ({ charname }) => {
  return (
    <>
      <img
        className="w-40 h40 rounded-xl"
        src={charname.images}
        alt={charname.name}
      />
    </>
  );
};

export default Card;
