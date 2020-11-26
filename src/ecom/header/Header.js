import React from "react";
import "./Header.scss";
import { Link, useRouteMatch } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { connect } from "react-redux";
import { showHideCart } from "../../redux/cart/cart-actions";
const Header = ({ showCartDropdown, setCartDropdown, itemCount }) => {
  // let [showCartDropdown, setShowCartDropdown] = useState(false);
  let { url } = useRouteMatch();
  return (
    <div className="Header">
      <Link className="LogoContainer" to="/ecom">
        <Logo className="Logo" />
      </Link>
      <div className="ShopMenu">
        <Link className="ShopMenuItem" to={`${url}/shop`}>
          SHOP
        </Link>
        <Link className="ShopMenuItem" to={`${url}/contact`}>
          CONTACT
        </Link>
        <CartIcon
          itemCount={itemCount}
          showCartDropdown={() => setCartDropdown()}
        />
      </div>
      {showCartDropdown ? <CartDropdown /> : null}
    </div>
  );
};

const mapStateToProps = ({ cart: { showCartDropdown, cartItems } }) => ({
  showCartDropdown,
  itemCount: cartItems.reduce((acc,cartItem) => acc + cartItem.quantity, 0 )
});
const mapDispatchToProps = (dispatch) => ({
  setCartDropdown: () => dispatch(showHideCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);