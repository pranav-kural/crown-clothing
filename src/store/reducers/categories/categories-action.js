import { createAction } from '../../../utils/reducers/reducers-utils';

export const CATEGORIES_ACTION_TYPES = {
  SET_CATEGORIES: 'SET_CATEGORIES',
};

export const setCategories = (categories) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);
