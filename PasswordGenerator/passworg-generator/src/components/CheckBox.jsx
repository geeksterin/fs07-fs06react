import React from "react";

const CheckBox = ({ label, onchange }) => {
  const style = {
    border: "2px solid green",
    marginTop: "1rem",
    padding: "1rem",
    color: "yellow",
    fontSize: "1rem",
    fontWeight: "700",
    display:"flex",
    alignItems:"center",
  };

  const labelStyle = {
    marginLeft: "1rem",
  };

  return (
    <>
      <div style={style}>
        <input
          style={{ width: "30px", height: "30px", border: "2px solid red" }}
          type="checkbox"
          name="checkbox"
          id="checkbox"
          onChange={() => {
            onchange();
          }}
        />
        <label style={labelStyle}>{label}</label>
      </div>
    </>
  );
};

export default CheckBox;
