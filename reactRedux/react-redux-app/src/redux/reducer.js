export const cartData = (data = [], action) => {
  if (action.type === "Add_to_cart") {
    console.log("reduced with add to cart", action.data);
    return [action.data, ...data]
  } else if (action.type === "Remove_from_cart") {
    console.log("removed from cart", action.data);
    data.length = data.length - 1
    return [...data]
  } else if (action.type === "Empty_cart") {
    console.log("cart emptied", action.data);
    return action.data
  } else {
    console.log("no action matched");
  }
  return data;
};
