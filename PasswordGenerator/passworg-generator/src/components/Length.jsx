import React from 'react'

const Length = ({label, onchange}) => {
  return (
    <>
    <div>
        <label htmlFor="">{label}</label>
        <input type="number" name="" id="" onChange={(e)=>{
            onchange(e.target.value)
        }} />
    </div>
    
    </>
  )
}

export default Length