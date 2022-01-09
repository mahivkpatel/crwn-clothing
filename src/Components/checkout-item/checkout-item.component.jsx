import React from 'react'

import './checkout-item.styles.scss'

const CheckOutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img alt="item" src={imageUrl} />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <span className="remove">&#10005;</span>
  </div>
)

export default CheckOutItem
