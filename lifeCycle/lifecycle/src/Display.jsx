// import React from 'react'

// const Display = ({time}) => {

//   return (
//     <>
//         <span>{(time.h>= 10) ? time.h : "0"+time.h} : </span>
//         <span>{(time.m>= 10) ? time.m : "0"+time.m} : </span>
//         <span>{(time.s>= 10) ? time.s : "0"+time.s} : </span>
//         <span>{(time.ms>= 10) ? time.ms : "0"+time.ms} </span>
//     </>
//   )
// }

// export default Display

import React, { Component } from "react";

export default class Display extends Component {
  render() {
    return (
      <>
        <span>{this.props.time.h >= 10 ? this.props.time.h : "0" + this.props.time.h} : </span>
        <span>{this.props.time.m >= 10 ? this.props.time.m : "0" + this.props.time.m} : </span>
        <span>{this.props.time.s >= 10 ? this.props.time.s : "0" + this.props.time.s} : </span>
        <span>{this.props.time.ms >= 10 ? this.props.time.ms : "0" + this.props.time.ms} </span>
      </>
    );
  }
}
