import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import HomePage from './Pages/homepage/homepage.component.jsx'
import ShopPage from './Components/shop/shop.component'
import Header from './Components/header/header.component'

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
)

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  )
}

export default App
