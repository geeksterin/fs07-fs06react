export const cartData = (data = [], action) => {
  if (action.type === "Add_to_cart") {
    console.log("reduced with add to cart", action.data);
  } else if (action.type === "Remove_from_cart") {
    console.log("removed from cart", action.data);
  } else {
    console.log("no action matched");
  }
  return "abc";
};
