import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { selectCollectionsFetching } from '../../redux/shop/shop.selector'
import collectionsOverviewComponent from './collections-overview.component'
import WithSpinner from '../with-spinner/with-spinner.component'

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionsFetching,
})

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(collectionsOverviewComponent)
export default CollectionsOverviewContainer
