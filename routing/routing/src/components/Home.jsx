import React from "react";
import { useContext } from "react";
import { GlobalData } from "../App";

const Home = () => {
  const context = useContext(GlobalData);
  return (
    <div>
      <label htmlFor="">name</label>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => {
          context.setstate({ ...context.state, name: e.target.value });
          console.log(context);
        }}
      />
    </div>
  );
};

export default Home;
