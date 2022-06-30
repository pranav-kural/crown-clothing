import { getCategoriesAndDocuments } from '../../../utils/firebase/firebase-utils';
import { createAction } from '../../../utils/reducers/reducers-utils';

export const CATEGORIES_ACTION_TYPES = {
  FETCH_CATEGORIES_START: 'FETCH_CATEGORIES_START',
  FETCH_CATEGORIES_SUCCESS: 'FETCH_CATEGORIES_SUCCESS',
  FETCH_CATEGORIES_FAILED: 'FETCH_CATEGORIES_FAILED',
};

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categories) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories);

export const fetchCategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
  // indicate categories loading started
  dispatch(fetchCategoriesStart());
  try {
    // fetch categories and dispatch the success
    dispatch(fetchCategoriesSuccess(await getCategoriesAndDocuments()));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
