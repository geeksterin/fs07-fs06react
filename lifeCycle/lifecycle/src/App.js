// import React, { useState } from "react";
// import ButtonComp from "./ButtonComp";
// import Display from "./Display";

// const App = () => {
//   const [time, setTime] = useState({h:0, m:0, s:0, ms:0})
//   const [int, setInt] = useState(0)
//   var updatedMiliSec = time.ms
//   var updatedSeconds = time.s
//   var updatedMinutes = time.m
//   var updatedHours = time.h

//   const Run = () =>{
//     if(updatedMiliSec === 100){
//       updatedSeconds++
//       updatedMiliSec = 0
//     }
//     if(updatedSeconds === 60){
//       updatedMinutes++
//       updatedSeconds = 0
//     }
//     if(updatedMinutes === 60){
//       updatedHours++
//       updatedMinutes = 0
//     }
//     updatedMiliSec++
//     return setTime({h:updatedHours, m:updatedMinutes, s:updatedSeconds, ms:updatedMiliSec})
//   }

//   const Start = () =>{
//     setInt(setInterval(()=>{
//       Run()
//     }, 10))
//     console.log("start", int);
//   }

//   const Reset = () =>{
//     console.log("reset",int);
//     clearInterval(int)
//     return setTime({h:0, m:0, s:0, ms:0})
//   }
//   const Pause = () =>{
//     clearInterval(int)
//   }

//   return (
//     <>
//       <Display time = {time} />
//       <ButtonComp Start={Start} name="start"/>
//       <ButtonComp Start={Pause} name="pause"/>
//       <ButtonComp Start={Reset} name="reset"/>
//     </>
//   );
// };

import React, { Component } from "react";
import ButtonComp from "./ButtonComp";
import Display from "./Display";
export default class App extends Component {
  constructor() {
    super();
    //   const [time, setTime] = useState({h:0, m:0, s:0, ms:0})
    //   const [int, setInt] = useState(0)
    this.state = {
      time: { h: 0, m: 0, s: 0, ms: 0 },
      int: 0,
    };
  }

  render() {
    var updatedMiliSec = this.state.time.ms;
    var updatedSeconds = this.state.time.s;
    var updatedMinutes = this.state.time.m;
    var updatedHours = this.state.time.h;

    const Run = () => {
      if (updatedMiliSec === 100) {
        updatedSeconds++;
        updatedMiliSec = 0;
      }
      if (updatedSeconds === 60) {
        updatedMinutes++;
        updatedSeconds = 0;
      }
      if (updatedMinutes === 60) {
        updatedHours++;
        updatedMinutes = 0;
      }
      updatedMiliSec++;
      return this.setState({
        time: {
          h: updatedHours,
          m: updatedMinutes,
          s: updatedSeconds,
          ms: updatedMiliSec,
        },
      });
    };

    const Start = () => {
      this.setState({
        int: setInterval(() => {
          Run();
        }, 10),
      });
      console.log("start", this.state.int);
    };

    const Reset = () => {
      console.log("reset", this.state.int);
      clearInterval(this.state.int);
      return this.setState({ time: { h: 0, m: 0, s: 0, ms: 0 } });
    };
    const Pause = () => {
      clearInterval(this.state.int);
    };

    return (
      <>
        <Display time={this.state.time} />
        <ButtonComp Start={Start} name="start" />
        <ButtonComp Start={Pause} name="pause" />
        <ButtonComp Start={Reset} name="reset" />
      </>
    );
  }
}
