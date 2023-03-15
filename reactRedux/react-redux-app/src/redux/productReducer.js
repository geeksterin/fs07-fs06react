export const productReducer = (data = [], action) => {
  switch (action.type) {
    case "Product_Action_Type":
      console.log("action from switch case Product_Action_Type", action);
      return action.data;
    case "Set_Product_Action":
      console.log("action from switch from Set_Product_Action", action);
      return action.data;
    case "Remove_from_cart":
      const remaningData = data.filter((ele) => ele.id !== action.data);
      console.log("remainig Data", remaningData);
      return remaningData;
    default:
      return data;
  }
};

// useState
// prpos
// useEffect
// api calling
// context api
// routing
