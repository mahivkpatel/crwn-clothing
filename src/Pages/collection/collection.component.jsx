import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selector'
import CollectionItem from '../../Components/collection-item/collection-item.component'
import './collection.styles.scss'

const CollectionPage = () => {
  const { collectionId } = useParams()
  const collections = useSelector(selectCollection(collectionId))
  const { title, items } = collections
  return (
    <div className="collection-page">
      <div className="title">{title}</div>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
export default CollectionPage
