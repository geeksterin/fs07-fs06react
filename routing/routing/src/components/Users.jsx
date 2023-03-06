import React from "react";
import { useParams } from "react-router-dom";

const Users = () => {

    const params = useParams()
    const {id} = params

  return (
    <>
      <div>current User : {id}</div>
   
    </>
  );
};

export default Users;
