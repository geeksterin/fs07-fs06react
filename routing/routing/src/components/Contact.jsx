import React from "react";
import { useContext } from "react";
import { GlobalData } from "../App";

const Contact = () => {
  const context = useContext(GlobalData);
  return (
    <div>
      <label htmlFor="">ph no.</label>
      <input
        type="text"
        placeholder="ph no."
        onChange={(e) => {
          context.setstate({ ...context.state, phno: e.target.value });
          console.log(context);
        }}
      />
    </div>
  );
};

export default Contact;
