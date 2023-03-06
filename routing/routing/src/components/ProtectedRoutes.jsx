import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoutes = ({Component}) => {
    const navigate= useNavigate()
    
    useEffect(() => {
        if(!localStorage.getItem("loginSucces")){
            navigate("/login")
        }
      
    });
  return (
    <div>
        gfsdgdsgfds
        <Component />
    </div>
  )
}

export default ProtectedRoutes