import { createSelector } from 'reselect';

const selectCategoriesReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice?.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((categoriesMap, { title, items }) => {
      categoriesMap[title.toLowerCase()] = items;
      return categoriesMap;
    }, {})
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);

export const selectCategoryListings = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.categoryListings
);

export const selectIsLoadingListings = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.isLoadingListing
);
