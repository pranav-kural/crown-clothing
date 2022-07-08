import { CATEGORIES_ACTION_TYPES } from './categories-action';

const CATEGORIES_INITIAL_STATE = {
  categories: [],
  categoryListings: [],
  isLoading: false,
  isLoadingListing: false,
  error: null,
  categoryListingsError: null,
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: payload, isLoading: false };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return { ...state, isLoading: false, error: payload };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_LISTINGS_START:
      return { ...state, isLoadingListing: true };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_LISTINGS_SUCCESS:
      return { ...state, categoryListings: payload, isLoadingListing: false };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_LISTINGS_FAILED:
      return { ...state, categoryListingsError: payload };
    default:
      return state;
  }
};
