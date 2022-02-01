import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Route } from 'react-router-dom'
import CollectionsOverviewContainer from '../collections-overview/collections-overview-container'
import CollectionPageContainer from '../../Pages/collection/collection.container'
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selector'
class ShopPage extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true,
    }
  }

  unsubscribeFromAuth = null
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props
    fetchCollectionsStartAsync()
  }
  render() {
    const { match } = this.props
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
})

const mapStateToProps = createStructuredSelector({
  isCollectionLoaded: selectIsCollectionsLoaded,
})
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
