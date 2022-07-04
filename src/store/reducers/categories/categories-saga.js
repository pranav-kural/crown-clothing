import { all, call, takeLatest, put } from 'redux-saga/effects';
import { getCategoriesAndDocuments } from '../../../utils/firebase/firebase-utils';
import {
  CATEGORIES_ACTION_TYPES,
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
} from './categories-action';

export function* fetchCategoriesAsync() {
  try {
    // fetch categories and dispatch the success
    const categories = yield call(getCategoriesAndDocuments);
    yield put(fetchCategoriesSuccess(categories));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
