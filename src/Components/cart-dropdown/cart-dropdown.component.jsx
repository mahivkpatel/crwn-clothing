import React from 'react'
import { connect } from 'react-redux'
import CartItem from '../card-item/card-item.component'
import CustomButton from '../custom-button/custom-button.component'

import './cart-dropdown.styles.scss'

const CartDropdwon = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems &&
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
    </div>
    <CustomButton>GO OT CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({ cartItems })
export default connect(mapStateToProps)(CartDropdwon)
