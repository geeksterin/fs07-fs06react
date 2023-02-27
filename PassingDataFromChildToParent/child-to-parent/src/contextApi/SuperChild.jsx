import React, { useContext } from "react";
import { GlobalData } from "./App";

const SuperChild = () => {
  const data = useContext(GlobalData);

  return (
    <div>
      SuperChild
      <input
        type="text"
        onChange={(e) => {
          data.state.phoneNumber = e.target.value;
          console.log(data);
        }}
      />
    </div>
  );
};

export default SuperChild;
