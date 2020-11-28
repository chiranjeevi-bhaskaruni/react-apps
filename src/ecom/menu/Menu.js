import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { menuItemsSelector } from "../../redux/menu/menu-selector";
import MenuItem from "./menu-item/MenuItem";
import "./Menu.scss";
const Menu = ({ menu }) => (
  <div className="menu">
    {menu.map(({ id, ...otherProps }) => (
      <MenuItem key={id} {...otherProps} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  menu: menuItemsSelector,
});
export default connect(mapStateToProps)(Menu);
