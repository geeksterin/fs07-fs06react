import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
  const dataFromRedux =  useSelector((state)=>{return state}) 
  console.log("data from redux", dataFromRedux);
  return (
    <>
        <span>{dataFromRedux.cartData.length}</span>
    </>
  )
}

export default Header