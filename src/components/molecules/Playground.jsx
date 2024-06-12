import { useContext } from "react";
import Card from "../atoms/Card";
import { RandomDataContext } from "./RandomData";

const Playground = () => {

  const { charnames } = useContext(RandomDataContext)



  return <div className="mt-5 grid grid-cols-3 gap-3">
    <Card charname={charnames[0]}/>
    <Card charname={charnames[1]}/>
    <Card charname={charnames[2]}/>
    <Card charname={charnames[3]}/>
    <Card charname={charnames[4]}/>
    <Card charname={charnames[5]}/>
    <Card charname={charnames[6]}/>
    <Card charname={charnames[7]}/>
    <Card charname={charnames[8]}/>
  </div>;
};

export default Playground;
