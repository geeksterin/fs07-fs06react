import React from 'react'

const LoginPage = () => {
  return (
    <div>
        <h1>Login</h1>
        <input type="text" />
        <input type="text" />
        <button onClick={()=>{
            localStorage.setItem("loginSucces", true)
        }} >Submit</button>
    </div>
  )
}

export default LoginPage