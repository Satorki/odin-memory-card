import { useContext } from "react";
import Card from "../atoms/Card";
import { RandomData } from "./RandomData";

const Playground = () => {

  const { charname } = useContext(RandomData)



  return <div className="mt-5 grid grid-cols-3 gap-3">
    <Card charname={charname}/>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>;
};

export default Playground;
