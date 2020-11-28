import memoize from "lodash.memoize";
import { createSelector } from "reselect";

const shopSelector = state => state.shop;

export const shopCollectionsSelector = createSelector(
  [shopSelector],
  (shop) => shop.collections
);

export const shopCollectionsPreviewSelector = createSelector(
  [shopCollectionsSelector],
  (collections) => Object.keys(collections).map(key => collections[key])
);

export const categorySelector = memoize((category) =>
  createSelector([shopCollectionsSelector], collections => collections[category]
));