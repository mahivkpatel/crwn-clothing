import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { auth } from '../../firebase/firebase.utils.js'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../card-icon/card-icon.component.jsx'
import CartDropdwon from '../cart-dropdown/cart-dropdown.component.jsx'
import './header.styles.scss'

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser !== null && currentUser.userAuth !== null ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT {currentUser.displayName}
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdwon />}
  </div>
)

function mapStateToProps(state) {
  const { currentUser } = state.user
  const { hidden } = state.cart
  return { currentUser: currentUser, hidden: hidden }
}

export default connect(mapStateToProps)(Header)
