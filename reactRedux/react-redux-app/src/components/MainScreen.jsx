import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, emptyCart, removeFromCart } from "../redux/action";
import { productAction } from "../redux/productsAction";

const MainScreen = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    console.log("dataToShow", state);
    return state.productReducer;
  });
  console.log("dataToShow", data);

  useEffect(() => {
    dispatch(productAction(data));
  }, []);
  return (
    <>
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
      {data.map((ele) => {
        return (
          <>
            <div key={ele.id}>
              <img src={ele.avatar_url} alt="" />
              <ul>
                <li>{ele.login}</li>
                <li>
                  <a href={ele.html_url}>visit this profile</a>
                </li>
              </ul>
              <button
                onClick={() => {
                  dispatch(addToCart(ele));
                }}
              >
                Add to cart
              </button>
              <button
                onClick={() => {
                  dispatch(removeFromCart(ele.id));
                }}
              >
                remove from cart
              </button>
            </div>
            <hr />
            <hr />
            <hr />
          </>
        );
      })}
    </>
  );
};

export default MainScreen;
