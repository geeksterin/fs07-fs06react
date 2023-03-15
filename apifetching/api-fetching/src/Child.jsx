import React, { useContext } from "react";
import { GlobatDataFromApi } from "./App";

const Child = () => {
  const context = useContext(GlobatDataFromApi);
  return (
    <div>
      Child {console.log("child", context)}
      {context.state.map((ele, idx) => {
        return (
          <div key={idx}>
            <h1 id={idx}>{ele.login}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Child;
