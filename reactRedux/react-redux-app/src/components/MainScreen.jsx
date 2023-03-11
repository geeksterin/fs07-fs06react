import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, emptyCart, removeFromCart } from "../redux/action";
import { productAction } from "../redux/productsAction";

const MainScreen = () => {
  const dispatch = useDispatch();
  const dataFromReduxInMainComponent = useSelector((state)=>{return state})
  console.log("data From Redux In Main Component", dataFromReduxInMainComponent);
  const data = {
    name: "rishabh",
    age: 22,
    phno: 32145412321675,
  };
  return (
    <>
      <button
        onClick={() => {
          dispatch(addToCart(data));
        }}
      >
        Add to cart
      </button>
      <button
        onClick={() => {
          dispatch(removeFromCart(data));
        }}
      >
        remove from cart
      </button>
      <button
        onClick={() => {
          dispatch(emptyCart(data));
        }}
      >
        empty cart
      </button>
      <button
        onClick={() => {
          dispatch(productAction(data));
        }}
      >
        product 
      </button>
    </>
  );
};

export default MainScreen;
