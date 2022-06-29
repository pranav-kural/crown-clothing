import { createAction } from '../../../utils/reducers/reducers-utils';

export const CATEGORIES_ACTION_TYPES = {
  SET_CATEGORIES: 'SET_CATEGORIES',
  FETCH_CATEGORIES_START: 'FETCH_CATEGORIES_START',
  FETCH_CATEGORIES_SUCCESS: 'FETCH_CATEGORIES_SUCCESS',
  FETCH_CATEGORIES_FAILED: 'FETCH_CATEGORIES_FAILED',
};

export const setCategories = (categories) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);
