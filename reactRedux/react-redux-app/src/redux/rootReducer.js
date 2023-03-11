import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

import { cartData } from "./reducer";

export default combineReducers({
  cartData: cartData,
  productReducer: productReducer,
});
