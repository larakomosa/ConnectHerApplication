import axios from 'axios';
import { stringify } from 'querystring';
import { put, takeLatest } from 'redux-saga/effects';

function* getFavorites(action) {
  const response = yield axios.get(`/api/favorites/${action.payload}`);
  yield put({
    type: 'SET_FAVORITES',
    payload: response.data,
  });
}

function* postFavorites(action) {
  yield axios.post(`/api/favorites/${action.payload.userId}`, action.payload);
  yield put({
    type: 'GET_FAVORITES',
    payload: action.payload.userId,
  });
}

function* putFavorites(action) {
  yield axios.put(`/api/favorites/${action.payload.userId}`, action.payload);
  yield put({
    type: 'GET_FAVORITES',
    payload: action.payload.userId,
  });
}

export default function* skillCategoriesSaga() {
  yield takeLatest('GET_FAVORITES', getFavorites);
  yield takeLatest('POST_FAVORITES', postFavorites);
  yield takeLatest('PUT_FAVORITES', putFavorites);
}
