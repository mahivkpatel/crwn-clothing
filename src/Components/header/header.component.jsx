import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { auth } from '../../firebase/firebase.utils.js'

import { signOutStart } from '../../redux/user/user.actions'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../card-icon/card-icon.component.jsx'
import CartDropdwon from '../cart-dropdown/cart-dropdown.component.jsx'
import { selectCartHidden } from '../../redux/cart/cart.selectors.js'
import { selectCurrentUser } from '../../redux/user/user.selector.js'
import {
  OptionLink,
  OptionDiv,
  OptionsContainer,
  HeaderContainer,
  LogoContainer,
} from './header.styles.jsx'
const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser !== null && currentUser.userAuth !== null ? (
        <OptionDiv className="option" onClick={signOutStart}>
          SIGN OUT {currentUser.displayName}
        </OptionDiv>
      ) : (
        <OptionLink className="option" to="/signin">
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdwon />}
  </HeaderContainer>
)

// function mapStateToProps=(state) {
//   return {
//     currentUser: selectCurrentUser(state),
//     hidden: selectCartHidden(state),
//   }
// }

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
})
const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)
