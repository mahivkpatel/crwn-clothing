import React, { useEffect, lazy, Suspense } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'

//import CheckOut from './Pages/checkout/checkout.component'
//import HomePage from './Pages/homepage/homepage.component.jsx'
//import SignInAndSingUpPage from './Components/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx'
//import ShopPage from './Components/shop/shop.component'
import Header from './Components/header/header.component'
import { selectCurrentUser } from './redux/user/user.selector'
import { checkUserSession } from './redux/user/user.actions'
import { GlobalStyle } from './global.styles'
import Spinner from './Components/spinner/spinner.component'
import ErrorBoundary from './Components/error-boundary/erroe-boundary.component'
const SignInAndSingUpPage = lazy(() =>
  import('./Components/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx'),
)
const HomePage = lazy(() => import('./Pages/homepage/homepage.component.jsx'))
const ShopPage = lazy(() => import('./Components/shop/shop.component'))
const CheckOut = lazy(() => import('./Pages/checkout/checkout.component'))
const App = () => {
  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
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
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  )
}

export default App
