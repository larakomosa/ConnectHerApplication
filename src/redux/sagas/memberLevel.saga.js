import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* memberSaga(action) {
  try {
    console.log('access level made it to saga', action.payload);
    yield put({ type: 'CLEAR_REGISTRATION_ERROR' });
    yield axios.post('/api/user/level', action.payload);
  } catch (error) {
    console.log('member level failed:', error);
  }
}

function* countSaga(action) {
  try {
    console.log('level_list saga reached', action);
    const response = yield axios.get('/api/user/count');
    yield put({
      type: 'SET_COUNTS',
      payload: response.data,
    });
    console.log('selected data', response.data);
  } catch (err) {
    yield put({
      type: 'SET_ERROR',
      payload: 'Could not get Member Level',
    });
  }
}

function* memberListSaga(action) {
  try {
    console.log('level_list saga reached', action);
    const selected = yield axios.get('/api/user/level');
    yield put({
      type: 'SET_LEVEL_LIST',
      payload: selected.data,
    });
    console.log('selected data', selected.data);
  } catch (err) {
    yield put({
      type: 'SET_ERROR',
      payload: 'Could not get Member Level',
    });
  }
}

function* memberLevel() {
  yield takeLatest('MEMBER_LEVEL', memberSaga);
  yield takeLatest('GET_LEVEL_LIST', memberListSaga);
  yield takeLatest('FETCH_LEVEL_COUNTS', countSaga);
}

export default memberLevel;
