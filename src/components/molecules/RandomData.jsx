import { createContext, useEffect, useState } from "react";

const RandomDataContext = createContext();

const RandomData = ({ children }) => {
  const [charnames, setCharnames] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);

  const randomize = () => {
    fetch("https://narutodb.xyz/api/character?page=1&limit=1000")
      .then((res) => res.json())
      .then((data) => {
        const randomCharnames = charnames.map(() => {
          console.log(data.characters.length);
          const randomChar = Math.floor(Math.random() * data.characters.length);
          console.log(randomChar)
          return data.characters[randomChar];
        });
        setCharnames(randomCharnames);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };
  useEffect(() => {
    randomize();
  }, []);

  return (
    <RandomDataContext.Provider value={{ charnames }}>
      {children}
    </RandomDataContext.Provider>
  );
};

export { RandomData, RandomDataContext };
