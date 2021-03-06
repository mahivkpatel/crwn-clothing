import { createSelector } from 'reselect'

const selectShop = (state) => state.shop

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections,
)

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null,
  )

export const selectCollectionsPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : [],
)

export const selectCollectionsFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching,
)

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections,
)