import React from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import CartItem from '../card-item/card-item.component'
import CustomButton from '../custom-button/custom-button.component'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import './cart-dropdown.styles.scss'

const CartDropdwon = () => {
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()
  const history = useHistory()
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout')
          dispatch(toggleCartHidden())
        }}
      >
        GO OT CHECKOUT
      </CustomButton>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
})

export default CartDropdwon
