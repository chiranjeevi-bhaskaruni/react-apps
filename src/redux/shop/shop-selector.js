import memoize from "lodash.memoize";
import { createSelector } from "reselect";

const shopSelector = state => state.shop;

export const shopCollectionsSelector = createSelector(
  [shopSelector],
  (shop) => shop.collections
);

export const categorySelector = memoize((category) =>
  createSelector([shopCollectionsSelector], (collections) =>
    collections.find((collection) => {
      console.log("categorySelector", collection, category);
      return collection.title.toLowerCase() === category.toLowerCase();
    })
  )
);