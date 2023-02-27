import React, { Component } from 'react'

export default class Child2 extends Component {

    componentDidMount(){
        console.log("component mounted");
    }
    componentDidUpdate(){
        console.log("component updated");
    }

    componentWillUnmount(){
        console.log("component unmounted")
    }

  render() {
    return (
      <>
        <div>child2 {this.props.count} </div>
        
      </>
    )
  }
}
