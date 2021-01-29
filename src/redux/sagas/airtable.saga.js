import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchAirtableSpeaker() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('/api/airtable/speaker', config);
    yield put({ type: 'SET_AIRTABLE_SPEAKER', payload: response.data.records });
  } catch (error) {
    console.log('Airtable get speaker request failed', error);
  }
}

function* fetchAirtableSpaces() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('/api/airtable/spaces', config);
    yield put({ type: 'SET_AIRTABLE_SPACES', payload: response.data.records });
  } catch (error) {
    console.log('Airtable get spaces request failed', error);
  }
}

function* fetchAirtableBusinesses() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('/api/airtable/businesses', config);
    yield put({
      type: 'SET_AIRTABLE_BUSINESSES',
      payload: response.data.records,
    });
  } catch (error) {
    console.log('Airtable get business request failed', error);
  }
}

function* airtableSaga() {
  yield takeLatest('FETCH_AIRTABLE_SPEAKER', fetchAirtableSpeaker);
  yield takeLatest('FETCH_AIRTABLE_SPACES', fetchAirtableSpaces);
  yield takeLatest('FETCH_AIRTABLE_BUSINESSES', fetchAirtableBusinesses);
}

export default airtableSaga;
