import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Child from "./Child";
import Filter from "./Filter";

const UseLocationHook = () => {
    const [state, setstate] = useState("hello");
    
  const location = useLocation();
  console.log(location);
  return (
    <div>
      UseLocationHook 
      
      <Child state={state} />
    </div>
  );
};

export default UseLocationHook;
