import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsPreview } from '../../redux/shop/shop.selector'
import CollectionPreview from '../collection-preview/collection-preview.component'

import './collection-overview.styles.scss'

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsPreview,
})

export default connect(mapStateToProps)(CollectionsOverview)
