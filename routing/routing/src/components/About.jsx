import React from "react";
import { useContext } from "react";
import { GlobalData } from "../App";

const About = () => {
  const context = useContext(GlobalData);
  return (
    <div>
      <label htmlFor="">age</label>
      <input
        type="text"
        placeholder="age"
        onChange={(e) => {
          context.setstate({ ...context.state, age: e.target.value });
          console.log(context);
        }}
      />
    </div>
  );
};

export default About;
