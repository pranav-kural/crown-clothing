import { createAction } from '../../../utils/reducers/reducers-utils';

export const CATEGORIES_ACTION_TYPES = {
  FETCH_CATEGORIES_START: 'FETCH_CATEGORIES_START',
  FETCH_CATEGORIES_SUCCESS: 'FETCH_CATEGORIES_SUCCESS',
  FETCH_CATEGORIES_FAILED: 'FETCH_CATEGORIES_FAILED',
  FETCH_CATEGORY_LISTINGS_START: 'FETCH_CATEGORY_LISTINGS_START',
  FETCH_CATEGORY_LISTINGS_SUCCESS: 'FETCH_CATEGORY_LISTINGS_SUCCESS',
  FETCH_CATEGORY_LISTINGS_FAILED: 'FETCH_CATEGORY_LISTINGS_FAILED',
};

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categories) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories);

export const fetchCategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoryListings = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_LISTINGS_START);

export const fetchCategoryListingsSuccess = (categoryListings) =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_LISTINGS_SUCCESS,
    categoryListings
  );

export const fetchCategoryListingsFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_LISTINGS_FAILED, error);
