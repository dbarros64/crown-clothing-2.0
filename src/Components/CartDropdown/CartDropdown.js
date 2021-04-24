import React from 'react';
import './CartDropdown.styles.scss';
import CartItem from '../CartItem/CartItem';
import { connect } from 'react-redux';

import CustomButton from '../CustomButton/CustomButton';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} /> )
            }

            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    </div>
);

const mapStateToProps = ({ cart: { cartItems }}) => ({
    cartItems
});


export default connect(mapStateToProps)(CartDropdown);