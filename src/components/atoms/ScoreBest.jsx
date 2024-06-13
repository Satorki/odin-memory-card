const ScoreBest = ({ bestScore }) => {
  return (
    <>
      {bestScore === 9 ? <h2>You win</h2> : <h2>Best: {bestScore}</h2>}
    </>
  );
};

export default ScoreBest;

