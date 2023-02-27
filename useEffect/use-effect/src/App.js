import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [state, setstate] = useState(1);
  const [state1, setstate1] = useState(1);
  const [state2, setstate2] = useState(1);
  const [state3, setstate3] = useState(1);

  useEffect(() => {
    // setstate(state+1)
    console.log("hello");
  },[state]);

  function name() {
    console.log("hello");
  }

  return (
    <div className="App">
      app {state}
      <button
        onClick={() => {
          setstate(2);
        }}
      >
        click me
      </button>
      <button
        onClick={() => {
          setstate1(2);
        }}
      >
        click me
      </button>
      <button
        onClick={() => {
          setstate2(2);
        }}
      >
        click me
      </button>
      <button
        onClick={() => {
          setstate3(2);
        }}
      >
        click me
      </button>
    </div>
  );
}

export default App;
