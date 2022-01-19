import React from 'react'
import './App.css'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Route, Switch, Redirect } from 'react-router-dom'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import CheckOut from './Pages/checkout/checkout.component'
import HomePage from './Pages/homepage/homepage.component.jsx'
import SignInAndSingUpPage from './Components/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx'
import ShopPage from './Components/shop/shop.component'
import Header from './Components/header/header.component'
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selector'

class App extends React.Component {
  unsubscribeFromAuth = null
  componentDidMount() {
    const { setCurrentUser } = this.props
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
        })
      }

      setCurrentUser({ userAuth })
    })
  }

  componentWillUnmount() {
    //  this.unsubscribeFromAuth()
  }

  render() {
    const { currentUser } = this.props
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckOut} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser !== null && currentUser.userAuth !== null ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSingUpPage />
              )
            }
          />
        </Switch>
      </div>
    )
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
