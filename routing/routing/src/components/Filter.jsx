import React from "react";
import { useSearchParams } from "react-router-dom";
const Filter = (props) => {

  console.log(props)
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("age"));
  console.log(searchParams.get("city"));

  const obj = {
    devicename: [],
    ram: [],
    storage: [],
  };

  return (
    <>
      <input type="text" onChange={(e)=>{
        setSearchParams({age:e.target.value})
      }} />
    </>
  );
};

export default Filter;
