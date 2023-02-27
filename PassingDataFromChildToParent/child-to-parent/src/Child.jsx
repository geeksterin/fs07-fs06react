import React from "react";
import App from "./contextApi/App";

const Child = ({ name, hello }) => {
  const name1 = "geekster";
  return (
    <div
      onClick={() => {
        hello(name1);
      }}
    >
      Child {name}
      <App />
    </div>
  );
};

export default Child;
