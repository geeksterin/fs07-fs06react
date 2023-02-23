import React from 'react'

const ButtonComp = ({onclick, generatedPass}) => {
  function name() {
    return "lime"
  }
  return (
    <>
    <div style={{ marginTop:"2rem",}} >
        <button style={
            generatedPass
              ? {
                  padding: ".5rem 1rem",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                  backgroundColor: name(),
                  color: "red",
                  fontSize: ".9rem",
                  fontWeight: "600",
                  boxShadow: "2px 2px 3px red",
                }
              : {
                  padding: ".5rem 1rem",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                  backgroundColor: "yellow",
                  fontSize: ".9rem",
                  fontWeight: "600",
                  boxShadow: "2px 2px 3px red",
                }
          } onClick={()=>{
            onclick()
        }}>{generatedPass?"password Generated" :"Generate Password"}</button>
    </div>
    
    </>
  )
}

export default ButtonComp