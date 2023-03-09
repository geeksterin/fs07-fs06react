import "./App.css";
import React, { useRef } from "react";
import User from "./User";

// import React, { createRef } from "react";
// class App extends React.Component {
//   constructor() {
//     super();
//     this.inputRef = createRef();
//   }

//   componentDidMount(){
//     console.log(this.inputRef);
//   }

//   getVal(){
//     console.log(this.inputRef.current.value);
//     this.inputRef.current.style.color="red"
//     this.inputRef.current.style.background="yellow"
//   }

//   render() {
//     return (
//       <div className="App">
//         <input defaultValue="hello" name="hello" type="text" ref={this.inputRef} />
//         <button onClick={()=>{
//           this.getVal()
//         }}>clickme</button>
//       </div>
//     );
//   }
// }

// function App() {
//   var inputRef = useRef()
//   function getVal() {
//     console.log(inputRef.current.value);
//     inputRef.current.disabled = true
//   }
//   return (
//     <>
//       <div>
//         <input type="text" ref={inputRef}></input>
//         <button onClick={()=>{
//           getVal()
//         }} > click me</button>
//       </div>
//     </>
//   )
// }

function App() {
  var inputRef = useRef();
  function getVal() {
        console.log(inputRef.current.value);
        inputRef.current.disabled = true
        inputRef.current.style.color="red"
      }
  return (
    <>
      <User ref={inputRef} />
      <button onClick={()=>{
        getVal()
      }}>click me</button>
    </>
  );
}

export default App;
