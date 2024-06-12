import { createContext, useEffect, useState } from "react";

const RandomDataContext = createContext();

const RandomData = ({ children }) => {
  const [charname, setCharname] = useState("Test");

  const randomize = () => {
    fetch("https://narutodb.xyz/api/character")
      .then((res) => res.json())
      .then((data) => setCharname(data.characters[0].name))
      .catch((error) => console.error("Error fetching data:", error));
  };
  useEffect(() => {
    randomize();
  }, []);

  return (
    <RandomDataContext.Provider value={{ charname }}>
      {children}
    </RandomDataContext.Provider>
  );
};

export { RandomData, RandomDataContext };
