import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckOutButton = ({ price }) => {
  const publishableKey =
    'pk_test_51JNxQaSIQd4AuhnG22QoATIwxoISiDE4K7zOidXD9KTbDmN9u7DyIckC8qYNsRak03npROIvsjjeBbnJkfWUNoon003cnx5Ciu'

  const priceForStripe = price * 100

  const onToken = (token) => {
    console.log(token)
    alert('Payment Succesful!')
  }
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckOutButton
