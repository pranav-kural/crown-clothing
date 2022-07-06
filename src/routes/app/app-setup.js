import { fetchCategoriesStart } from '../../store/reducers/categories/categories-action';
import {
  checkUserSession,
  setCurrentUser,
} from '../../store/reducers/user/user-actions';
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from '../../utils/firebase/firebase-utils';

/**
 * Initial App Setup.
 * Sets the current user (if any) and then,
 * load the categories into categoriesMap
 * @param {function} dispatch function to dispatch actions to redux-store
 * @returns unsubscribe function to unsubscribe the onAuthStateChangedListener()
 */
export const appSetup = (dispatch) => {
  // const unsubscribe = onAuthStateChangedListener((user) => {
  //   // create user doc in DB if it doesn't exists
  //   // returns userDocRef
  //   if (user) createUserDocumentFromAuth(user);
  //   // update context
  //   dispatch(setCurrentUser(user));
  // });

  dispatch(checkUserSession());

  // update categoriesMap
  dispatch(fetchCategoriesStart());

  // unsubscribe onAuthStateChangedListener when component umount
  // return unsubscribe;
};
