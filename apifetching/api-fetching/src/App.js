import { createContext } from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Child from "./Child";
import Hello from "./Hello";

export const GlobatDataFromApi = createContext();
export const Doosra = createContext();

function App() {
  const [state, setstate] = useState([]);
  const [render, setRender] = useState(false);
  useEffect(() => {
    users();
  }, []);

  const users = () => {
    fetch("https://api.github.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setstate(data);
        setRender(true);
      });
  };

  return (
    <>
      <GlobatDataFromApi.Provider
        value={{ state: state, setstate: setstate, key: Date.now() }}
      >
        <div className="App">
          app
          <Child />
          {render && <Hello />}
        </div>
      </GlobatDataFromApi.Provider>
    </>
  );
}

export default App;
