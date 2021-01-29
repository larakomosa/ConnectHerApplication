import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getCategories() {
    const response = yield axios.get('/api/categories/all');
    yield put({
        type: 'SET_CATEGORIES',
        categories: response.data,
    })
}

export default function* skillCategoriesSaga() {
    yield takeLatest('GET_CATEGORIES', getCategories);
}