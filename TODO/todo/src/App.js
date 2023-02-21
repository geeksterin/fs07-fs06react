import { useState } from "react";
import "./App.css";
import InputComp from "./components/InputComp";
import ListToShow from "./components/ListToShow";

function App() {
  const [currentValue, setCurrentvalue] = useState("");
  const [currentList, setCurrentList] = useState([]);
  const [disabled, setDisabled] = useState(true)
  return (
    <div className="App">
      <InputComp
        currentValue={currentValue}
        setCurrentvalue={setCurrentvalue}
        currentList={currentList}
        setCurrentList={setCurrentList}
        disabled= {disabled}
        setDisabled={setDisabled}
      />
      <ListToShow currentList={currentList} setCurrentList={setCurrentList} />
    </div>
  );
}

export default App;
