import React, { useContext, useState, useEffect } from "react";
import { currentProductDetails } from "../../App";

const CartPage = () => {
  const context = useContext(currentProductDetails);
  const [total, setTotal] = useState(0);
  var subTotal = 0;
  useEffect(() => {
    {
      context.cartItems.allCartItems.map((ele) => {
        subTotal = subTotal + ele.price;
        console.log(subTotal);
      });
    }
    setTotal(subTotal);
    // testApi()
  }, [total]);

  //   const testApi = ()=>{
  //     fetch("https://api.github.com/users").then((res)=>{
  //     return res.json();
  //     }).then((res)=>{
  //         console.log(res);
  //     })
  //   }

  return (
    <>
      <div className="cartMainDiv">
        {context.cartItems.allCartItems.map((ele) => {
          return (
            <>
              <p>{ele.price}</p>
              <p>{ele.title}</p>
              <p>{ele.description}</p>
              <p>{ele.category}</p>
              <p>{ele.image}</p>
              <hr />
              <hr />
              <hr />
              <hr />
            </>
          );
        })}

        <h1>sum total : {total}</h1>
      </div>
    </>
  );
};

export default CartPage;
