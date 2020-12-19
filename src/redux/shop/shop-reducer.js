import { ShopActionTypes } from "./shop-action-types";

const { default: SHOP_DATA } = require("./shop-data");

const INITIAL_DATA = {
    collections: SHOP_DATA};

const ShopReducer = (state = INITIAL_DATA, action) => {
    switch (action.type) {
      case ShopActionTypes.UPDATE_COLLECTIONS:
        return {
          ...state,
          collections: action.payload,
        };
      default:
        return state;
    }
}

export default ShopReducer;