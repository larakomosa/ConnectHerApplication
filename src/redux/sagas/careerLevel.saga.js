import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getCareerLevel() {
  try {
    console.log('made it to the career saga');
    const response = yield axios.get('/api/career/all');
    yield put({
      type: 'SET_CAREER_LEVELS',
      careerLevel: response.data,
    });
  } catch (error) {
    console.log('Everything failed', error);
  }
}

function* getUserCareer(action) {
  console.log('made it to the career saga');
  try {
    const response = yield axios.get(`/api/career/user/${action.payload}`);
    yield put({
      type: 'SET_USER_CAREER',
      userCareer: response.data[0],
    });
    console.log('userCareer', response.data);
  } catch (error) {
    console.log('Everything failed', error);
  }
}

function* postCareerLevel(action) {
  console.log('career level', action.payload);
  try {
    yield axios.post('/api/career/user', action.payload);
    yield put({ type: 'SET_USER_CAREER', payload: action.payload });
  } catch (error) {
    console.log('Everything failed', error);
  }
}

export default function* careerSaga() {
  yield takeLatest('GET_CAREER_LEVELS', getCareerLevel);
  yield takeLatest('POST_USER_CAREER', postCareerLevel);
  yield takeLatest('GET_USER_CAREER', getUserCareer);
}
