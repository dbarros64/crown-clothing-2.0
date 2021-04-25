import React from 'react';
import './CartDropdown.styles.scss';
import CartItem from '../CartItem/CartItem';
import { connect } from 'react-redux';
import { selectCartItems } from '../../Redux/cart/cart.selectors';
import { toggleCartHidden } from '../../Redux/cart/cart.actions';

import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../CustomButton/CustomButton';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length ? (
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} /> 
                )
                ) : (
                <span className='empty-message'>Your cart is empty</span>
                )}

            <CustomButton 
                onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden())
                }}>
                    GO TO CHECKOUT
            </CustomButton>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});



export default withRouter(connect(mapStateToProps)(CartDropdown));