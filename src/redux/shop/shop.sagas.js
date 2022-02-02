import { takeLatest, call, put, all } from 'redux-saga/effects'
import {
  firestore,
  convertCollectionsSnapshortToMap,
} from '../../firebase/firebase.utils'
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from './shop.actions'

import ShopActionTypes from './shop.types'

export function* fetchCollectionsAsync() {
  try {
    const CollectionRef = firestore.collection('collections')
    const snapshort = yield CollectionRef.get()
    const colllectionsMap = yield call(
      convertCollectionsSnapshortToMap,
      snapshort,
    )
    yield put(fetchCollectionsSuccess(colllectionsMap))
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message))
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync,
  )
}

export function* shopSaga() {
  yield all([call(fetchCollectionsStart)])
}
