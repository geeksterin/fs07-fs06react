import React from 'react'

const PasswordGenerator = ({handelText, setHandelText}) => {
  return (
    <>
        <div className="passwordGenerator">
            <input type="text" value={handelText} onChange={(e)=>{
                setHandelText(e.target.value)
            }}  />
        </div>
    </>
  )
}

export default PasswordGenerator