import React from "react";
import './inpcomp.css'
const InputComp = ({currentValue, setCurrentvalue, currentList, setCurrentList, disabled, setDisabled}) => {
  return (
    <>
      <div className="impComp">
        <div className="inputContainer">
          <input type="text" value={currentValue} onChange={(e)=>{
            setCurrentvalue(e.target.value)
            if(e.target.value === ""){
              setDisabled(true)
            }else{
              setDisabled(false)
            }
          }} />
        </div>
        <div className="buttonConatiner">
          <button disabled={disabled} onClick={()=>{
            setCurrentList([...currentList, {currentValue:currentValue, id: Date.now()}])
            setCurrentvalue("")
            setDisabled(true)
          }}>+</button>
        </div>
      </div>
    </>
  );
};

export default InputComp;
