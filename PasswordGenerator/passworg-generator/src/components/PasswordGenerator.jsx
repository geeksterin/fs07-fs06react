import React from "react";

const PasswordGenerator = ({
  handelText,
  setHandelText,
  copied,
  setCopied,
}) => {
  return (
    <>
      <div
        className="passwordGenerator"
        style={{
          // border: "2px solid blue",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          value={handelText}
          onChange={(e) => {
            setHandelText(e.target.value);
          }}
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
        />
        <button
          style={
            copied
              ? {
                  padding: ".5rem 1rem",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                  backgroundColor: "lime",
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
          }
          onClick={() => {
            if (handelText.length > 0) {
              console.log("handelText", handelText);
              navigator.clipboard.writeText(handelText);
              setCopied(true);
              setInterval(() => {
                setCopied(false);
              }, 3000);
            }
          }}
        >
          {copied ? "Copied !!!" : "Copy password"}
        </button>
      </div>
    </>
  );
};

export default PasswordGenerator;

// top most div height => vh
// top most div width => vw
// child div width and height => %
// font size => rem (always)
// border => px
// input width => ch
// border radius => px/rem/% (dep on the usecase)
