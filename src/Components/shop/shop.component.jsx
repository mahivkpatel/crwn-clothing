import React from 'react'
import { connect } from 'react-redux'
import { updateCollections } from '../../redux/shop/shop.actions'
import withSpinner from '../with-spinner/with-spinner.component'
import { Route } from 'react-router-dom'
import CollectionPage from '../../Pages/collection/collection.component'
import CollectionsOverview from '../collections-overview/collections-overview.component'
import {
  firestore,
  convertCollectionsSnapshortToMap,
} from '../../firebase/firebase.utils'

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview)
const CollectionPageWithSpinner = withSpinner(CollectionPage)
class ShopPage extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true,
    }
  }

  unsubscribeFromAuth = null
  componentDidMount() {
    const { updateCollections } = this.props
    const CollectionRef = firestore.collection('collections')
    CollectionRef.get().then((snapshort) => {
      const collectionMap = convertCollectionsSnapshortToMap(snapshort)
      updateCollections(collectionMap)
      this.setState({
        loading: false,
      })
    })
  }
  render() {
    const { loading } = this.state
    const { match } = this.props
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
          component={CollectionsOverview}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionMap) =>
    dispatch(updateCollections(collectionMap)),
})
export default connect(null, mapDispatchToProps)(ShopPage)
