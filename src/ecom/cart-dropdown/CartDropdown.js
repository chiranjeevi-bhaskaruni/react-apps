import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CustomButton from '../../common/custom-button/CustomButton'
import { showHideCart } from '../../redux/cart/cart-actions';
import CartItems from '../cart-items/CartItems';
import './CartDropdown.scss';
const CartDropdown = ({history, match, dispatch}) => {
    return (
      <div className="CartDropdown">
        <CartItems />
        <CustomButton onClick={() => {
          history.push(`${match.url}/checkout`)
          dispatch(showHideCart());
        }}>GO TO CHECKOUT</CustomButton>
      </div>
    );
}

export default withRouter(connect(null)(CartDropdown))
