import React from "react";

const CheckBox = ({ label, onchange }) => {
  return (
    <>
      <div>
        <input type="checkbox" name="checkbox" id="checkbox" onChange={()=>{
          onchange()
        }} />
        <label>{label}</label>
      </div>
    </>
  );
};

export default CheckBox;
