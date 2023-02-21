import React from 'react'
import './App.css'
import image from './images/image.jpg'
const Comp = ({darkTheme}) => {
    const dark = {
        backgroundColor:"black", color:"white"
    }
    const light = {
        backgroundColor:"white", color:"black"
    }
  return (
    <>
        {/* <div className='CompContainer' style={darkTheme ? {backgroundColor:"black", color:"white"} : {backgroundColor:"white", color:"black"}} >Component One</div> */}
        {/* <div className='CompContainer' style={darkTheme ? dark : light} >Component One</div> */}
        <div className='CompContainer' style={darkTheme} >
            <div className="leftContainer">
                <h1>HEY, I'm Rishabh Sharma</h1>
                <h3>Lead Front-end Developer @BNG || Educator @GeekSter</h3>
                <button>Hire Me</button>
            </div>
            <div className="RightContainer">
                <img src={image} alt="My Img" />
            </div>
        </div>
    </>
  )
}

export default Comp