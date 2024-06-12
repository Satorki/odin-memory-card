import { useContext } from "react";
import Card from "../atoms/Card";
import { RandomDataContext } from "./RandomData";

const Playground = () => {

  const { charnames } = useContext(RandomDataContext)

  return <div className="mt-5 grid grid-cols-3 gap-3">
    <Card charname={charnames}/>
    <Card charname={charnames}/>
    <Card charname={charnames}/>
    <Card charname={charnames}/>
    <Card charname={charnames}/>
    <Card charname={charnames}/>
    <Card charname={charnames}/>
    <Card charname={charnames}/>
    <Card charname={charnames}/>
  </div>;
};

export default Playground;
