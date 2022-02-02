import React from 'react'
import './App.css'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Route, Switch, Redirect } from 'react-router-dom'
import CheckOut from './Pages/checkout/checkout.component'
import HomePage from './Pages/homepage/homepage.component.jsx'
import SignInAndSingUpPage from './Components/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx'
import ShopPage from './Components/shop/shop.component'
import Header from './Components/header/header.component'
import { selectCurrentUser } from './redux/user/user.selector'
import { checkUserSession } from './redux/user/user.actions'

class App extends React.Component {
  unsubscribeFromAuth = null
  componentDidMount() {
    const { checkUserSession } = this.props
    checkUserSession()
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
  checkUserSession: () => dispatch(checkUserSession()),
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
