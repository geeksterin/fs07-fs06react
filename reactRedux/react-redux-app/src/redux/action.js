export const addToCart = (data) => {
//   console.log("add to cart called", data);
  return {
    type: "Add_to_cart",
    data: data
  };
};
export const removeFromCart = (data) => {
//   console.log("remove from cart called", data);
  return {
    type: "Remove_from_cart",
    data: []
  };
};
