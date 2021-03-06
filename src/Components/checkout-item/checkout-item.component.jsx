import React from 'react'
import { connect } from 'react-redux'
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.actions'
import './checkout-item.styles.scss'

const CheckOutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, quantity, price, imageUrl } = cartItem
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove" onClick={() => clearItem(cartItem)}>
        &#10005;
      </span>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  clearItem: (item) => dispatch(clearItemFromCart(item)),
})
export default connect(null, mapDispatchToProps)(CheckOutItem)
