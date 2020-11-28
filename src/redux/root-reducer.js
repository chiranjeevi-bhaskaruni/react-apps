import userReducer from "./user/user-reducer";
import { combineReducers } from "redux";
import CartReducer from "./cart/cart-reducer";
import MenuReducer from "./menu/menu-reducer";
import ShopReducer from "./shop/shop-reducer";
/* import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist"; */
const rootReducer = combineReducers({
  user: userReducer,
  cart: CartReducer,
  menu: MenuReducer,
  shop: ShopReducer
});

/* const persistConfig = {
  key: "root",
  storage,
  whitelist: ['cart']
};

const persistedReducer = persistReducer(persistConfig, rootReducer); */

export default rootReducer;