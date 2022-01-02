import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import HomePage from './Pages/homepage/homepage.component.jsx'
import SignInAndSingUpPage from './Components/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx'
import ShopPage from './Components/shop/shop.component'
import Header from './Components/header/header.component'
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null,
    }
  }
  unsubscribeFromAuth = null
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user })
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    const { currentUser } = this.state
    return (
      <div>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signIn" component={SignInAndSingUpPage} />
        </Switch>
      </div>
    )
  }
}

export default App
