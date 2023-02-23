import React from "react";

const Length = ({ label, onchange }) => {
  return (
    <>
      <div style={{ marginTop: "1rem" }}>
        <label style={{ color: "white" }}>{label}</label>
        <input
          style={{
            padding: ".5rem 1rem",
            backgroundColor: "transparent",
            color: "white",
            fontSize: "1rem",
            fontWeight: "600",
            border: "none",
            outline: "none",
            borderBottom: "1px solid white",
          }}
          type="number"
          name=""
          id=""
          onChange={(e) => {
            onchange(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default Length;
