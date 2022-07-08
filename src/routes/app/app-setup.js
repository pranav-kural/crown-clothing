import { batch } from 'react-redux';
import { fetchCategoriesStart } from '../../store/reducers/categories/categories-action';
import { fetchCategoryListings } from '../../store/reducers/categories/categories-action';
import { checkUserSession } from '../../store/reducers/user/user-actions';

/**
 * Initial App Setup.
 * Sets the current user (if any) and then,
 * load the categories into categoriesMap
 * @param {function} dispatch function to dispatch actions to redux-store
 * @returns unsubscribe function to unsubscribe the onAuthStateChangedListener()
 */
export const appSetup = (dispatch) => {
  batch(() => {
    dispatch(checkUserSession());
    dispatch(fetchCategoryListings());
    dispatch(fetchCategoriesStart());
  });
};
