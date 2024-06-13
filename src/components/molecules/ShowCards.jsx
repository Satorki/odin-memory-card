import { createContext, useState } from "react";

const ShowCardContext = createContext();

const ShowCards = ({ children }) => {
  const [reversedCard, setReversedCard] = useState(false);

  const handleReversedCard = () => {
    setReversedCard(!reversedCard);
  };

  return (
    <ShowCardContext.Provider value={{ handleReversedCard, reversedCard }}>
      {children}
    </ShowCardContext.Provider>
  );
};

export { ShowCards, ShowCardContext };
