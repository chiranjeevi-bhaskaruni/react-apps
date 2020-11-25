import userReducer from "./user/user-reducer";
import { combineReducers } from "redux";
import CartReducer from "./cart/cart-reducer";

const rootReducer = combineReducers({
  user: userReducer,
  cart: CartReducer
});

export default rootReducer;