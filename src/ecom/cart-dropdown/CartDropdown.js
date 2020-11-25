import React from 'react'
import CustomButton from '../../common/custom-button/CustomButton'
import './CartDropdown.scss';
const CartDropdown = () => {
    return (
        <div className="CartDropdown">
            <div className="CartItems"/>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown
