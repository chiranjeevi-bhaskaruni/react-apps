import React from 'react'
import CustomButton from '../../common/custom-button/CustomButton'
import CartItems from '../cart-items/CartItems';
import './CartDropdown.scss';
const CartDropdown = () => {
    return (
        <div className="CartDropdown">
            <CartItems />
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown
