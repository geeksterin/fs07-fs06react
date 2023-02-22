import React from 'react'

const ButtonComp = ({onclick}) => {
  return (
    <>
    <div>
        <button onClick={()=>{
            onclick()
        }}>Generate Password</button>
    </div>
    
    </>
  )
}

export default ButtonComp