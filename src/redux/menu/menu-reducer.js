const { MENU_DATA } = require("./menu-data");

const INITIAL_DATA = MENU_DATA;

const MenuReducer = (state = INITIAL_DATA, action) => {
    switch(action.type) {
        default: 
        return state;
    }
}

export default MenuReducer;