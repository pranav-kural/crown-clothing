import { all, call, takeLatest, put } from 'redux-saga/effects';
import {
  getCategoriesAndDocuments,
  getCategoryListings,
} from '../../../utils/firebase/firebase-utils';
import {
  CATEGORIES_ACTION_TYPES,
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
  fetchCategoryListingsFailed,
  fetchCategoryListingsSuccess,
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

export function* fetchCategoryListings() {
  try {
    const categoryListings = yield call(getCategoryListings);
    console.log('cl: ', categoryListings);
    yield put(fetchCategoryListingsSuccess(categoryListings));
  } catch (error) {
    console.error(error);
    yield put(fetchCategoryListingsFailed(error));
  }
}

export function* onFetchCategoryListings() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_LISTINGS_START,
    fetchCategoryListings
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories), call(onFetchCategoryListings)]);
}
