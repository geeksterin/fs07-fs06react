import React from "react";
import Child2 from "./Child2";



export default class Child extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }
  render() {
    return (
      <>
        <div>child class conponents</div>
        <button
          onClick={() => {
            if (this.state.count > 0) {
              this.setState({ count: this.state.count - 1 });
            } else {
              this.setState({ count: 0 });
            }
          }}
        >
          Click me (-)
        </button>
        <h1 style={this.state.count % 2 === 0 ? {color:"red"}: {color:"white"}} >{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Click me
        </button>
        <Child2 count={this.state.count} />
      </>
    );
  }
}
