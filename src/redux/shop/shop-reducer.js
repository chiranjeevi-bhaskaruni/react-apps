const { default: SHOP_DATA } = require("./shop-data");

const INITIAL_DATA = SHOP_DATA;

const ShopReducer = (state = INITIAL_DATA, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default ShopReducer;