import React from 'react'
import { withRouter } from 'react-router-dom';
import CustomButton from '../../common/custom-button/CustomButton'
import CartItems from '../cart-items/CartItems';
import './CartDropdown.scss';
const CartDropdown = ({history, match}) => {
    console.log(match)
    return (
      <div className="CartDropdown">
        <CartItems />
        <CustomButton onClick={() => history.push(`${match.url}/checkout`)}>GO TO CHECKOUT</CustomButton>
      </div>
    );
}

export default withRouter(CartDropdown)
