import ShopActionTypes from './shop.types'
import {
  firestore,
  convertCollectionsSnapshortToMap,
} from '../../firebase/firebase.utils'

export const fetchCollectionsStart = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
})

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
})

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAIL,
  payload: errorMessage,
})
export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const CollectionRef = firestore.collection('collections')
    dispatch(fetchCollectionsStart())
    CollectionRef.get()
      .then((snapshort) => {
        const collectionMap = convertCollectionsSnapshortToMap(snapshort)
        dispatch(fetchCollectionsSuccess(collectionMap))
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)))
  }
}
