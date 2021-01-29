import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* postPersonality(action) {
  console.log('made it to personality survey');
  console.log('payload', action.payload);
  try {
    yield put({ type: 'ERROR_RESET' });
    const response = yield axios.post('/api/personality', action.payload);
    console.log(response.data);
    yield put({
      type: 'SET_PERSONALITY',
    });
    console.log('make it back personality');
  } catch (err) {
    console.log('PERSONALITY ERROR, err');
    yield put({
      type: 'ERROR_MSG',
      payload: 'Post Personality Error, Please try again.',
    });
  }
}

function* getPersonality(action) {
  console.log('made it to the personality saga');
  try {
    const response = yield axios.get(`/api/personality/${action.payload}`);
    yield put({
      type: 'SET_PERSONALITY',
      personality: response.data[0],
    });
  } catch (error) {
    console.log('Everything failed', error);
  }
}

function* choresSaga() {
  yield takeLatest('SUBMIT_PERSONALITY', postPersonality);
  yield takeLatest('GET_PERSONALITY', getPersonality);
}

export default choresSaga;
