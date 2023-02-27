import { useState } from 'react';
import './App.css';
import Child from './Child';

function App() {
  const [name, setName] = useState("riashabh")
  function hello(params) {
    console.log(params);
    setName(params)
  }
  return (
    <div className="App">
      App
      <Child name={name} hello={hello}/>
    </div>
  );
}

export default App;
