import React, { createContext, useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import { StoreData } from "./Store";

export const GlobalData = createContext();
const App = () => {
// const [state, setstate] = useState(StoreData);
  return (
    <GlobalData.Provider value={{state:StoreData}}>
      <div>
        App from context api
        <Child1 />
        <Child2 />
      </div>
    </GlobalData.Provider>
  );
};

export default App;
