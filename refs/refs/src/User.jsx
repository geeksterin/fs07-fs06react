import React, {forwardRef} from 'react'

const User = (props, hello) => {
  return (
    <>
        <input type="text" ref={hello}></input>
    </>
  )
}

export default forwardRef(User)