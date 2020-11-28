import { createSelector } from "reselect";

const menuSelector = (state) => state.menu;

export const menuItemsSelector = createSelector(menuSelector, menu => menu.menuItems);
