import { createContext, useEffect, useState } from "react";

const RandomDataContext = createContext();

const RandomData = ({ children }) => {
  const [character, setCharacter] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);

  //CHARACTERS NUMBERS ID  1344, 376, 1299, 1063, 259, 636, 1307, 1293, 861
  const charactersIds = [1344, 376, 1299, 1063, 259, 636, 1307, 1293, 861];

  const shuffleNumber = () => {
    return Math.random()
  }

  const shuffle = (array) => {
    return array.sort(() => shuffleNumber() - 0.5 )
  }

  const shuffledCharacters = () => {
    let shuffledCharactersIds = shuffle(charactersIds)
    return shuffledCharactersIds
  }
  console.log(shuffleNumber());
  console.log(shuffledCharacters());


  const getCharactersData = async () => {
    try {
      const charactersData = await Promise.all(
        shuffledCharacters().map((char) =>
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




  return (
    <RandomDataContext.Provider value={{ character, shuffleNumber }}>
      {children}
    </RandomDataContext.Provider>
  );
};

export { RandomData, RandomDataContext };
