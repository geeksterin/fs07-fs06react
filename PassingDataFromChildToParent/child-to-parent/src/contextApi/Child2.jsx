import React, { useContext } from "react";
import { GlobalData } from "./App";

const Child2 = () => {
  const data = useContext(GlobalData);
  return (
    <div>Child2
       <input
        type="text"
        onChange={(e) => {
          data.state.age = e.target.value;
          console.log(data);
        }}
      />
    </div>
  )
}

export default Child2