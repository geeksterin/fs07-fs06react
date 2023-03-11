export const addToCart = (data) => {
  return {
    type: "Add_to_cart",
    data: data
  };
};
export const removeFromCart = (data) => {
  return {
    type: "Remove_from_cart",
    data: data
  };
};
export const emptyCart = (data) => {
  return {
    type: "Empty_cart",
    data: []
  };
};
