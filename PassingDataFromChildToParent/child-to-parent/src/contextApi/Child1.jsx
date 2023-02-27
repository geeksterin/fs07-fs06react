import React, { useContext } from "react";
import { GlobalData } from "./App";
import SuperChild from "./SuperChild";

const Child1 = () => {
  const data = useContext(GlobalData);
  return (
    <div>
      Child1
      {console.log(data)}
      <input
        type="text"
        onChange={(e) => {
          data.state.name = e.target.value;
          console.log(data);
        }}
      />
      <SuperChild />
    </div>
  );
};

export default Child1;
