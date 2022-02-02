import { all, call } from 'redux-saga/effects'
import { userSaga } from './user/user.sagas'
import { cartSagas } from './cart/cart-sagas'
import { shopSaga } from './shop/shop.sagas'
export function* rootSaga() {
  yield all([call(shopSaga), call(userSaga), call(cartSagas)])
}
