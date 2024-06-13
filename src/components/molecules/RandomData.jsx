import { createContext, useEffect, useState } from "react";

const RandomDataContext = createContext();

const RandomData = ({ children }) => {
  const charactersIds = [1344, 376, 1299, 1063, 259, 636, 1307, 1293, 861];
  const [character, setCharacter] = useState(charactersIds);

  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const getCharactersData = async () => {
    try {
      const charactersData = await Promise.all(
        charactersIds.map((char) =>
          fetch(`https://narutodb.xyz/api/character/${char}`).then((res) =>
            res.json()
          )
        )
      );
      return charactersData;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

  const fetchData = async () => {
    const data = await getCharactersData();
    setCharacter(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const shuffleCharacters = () => {
    setCharacter((prevCharacters) => shuffle([...prevCharacters]));
  };

  return (
    <RandomDataContext.Provider value={{ character, shuffleCharacters }}>
      {children}
    </RandomDataContext.Provider>
  );
};

export { RandomData, RandomDataContext };
