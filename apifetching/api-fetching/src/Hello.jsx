import React, { useContext } from "react";
import { Doosra } from "./App";

const Hello = () => {
  const context = useContext(Doosra);

  return <div>Hello {console.log("hello", context)}</div>;
};

export default Hello;
