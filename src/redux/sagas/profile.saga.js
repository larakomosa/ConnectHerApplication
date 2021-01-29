import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getProfile(action) {
  try {
    const response = yield axios.get(
      `/api/profile/about/${action.payload}`
      //  Data structure needed for payload on backend on req.body: { id }
    );
    yield put({
      type: 'SET_MY_PROFILE',
      payload: response.data[0],
    });
  } catch (error) {
    console.log('Profile failed to update. Please try again.', error);
  }
}

function* updateProfile(action) {
  try {
    yield axios.put(
      `/api/profile/about/${action.payload.id}`,
      action.payload.profile
    );
    yield axios.put(
      `/api/profile/user/${action.payload.id}`,
      action.payload.profile
    );
    yield put({
      type: 'FETCH_USER',
      payload: action.payload.id,
    });
  } catch (error) {
    console.log('Profile failed to update. Please try again.', error);
  }
}

function* updateProfileAdmin(action) {
  try {
    yield axios.put(
      `/api/profile/about/${action.payload.id}`,
      action.payload.profile
    );
    yield axios.put(
      `/api/profile/user/${action.payload.id}`,
      action.payload.profile
    );
    yield axios.put(`/api/user/level/${action.payload.id}`, action.payload);
    yield put({
      type: 'FETCH_USER',
      payload: action.payload.id,
    });
  } catch (error) {
    console.log('Profile failed to update. Please try again.', error);
  }
}

function* getAllProfiles(action) {
  try {
    const response = yield axios.get(
      `/api/profile/members`
      //  Data structure needed for payload on backend on req.body: { id }
    );
    const responseSkills = yield axios.get(`/api/profile/memberskills`);
    const profiles = response.data.map((profile) => {
      return {
        ...profile,
        skills: responseSkills.data.filter((skill) => {
          return skill.user_id === profile.user_id;
        }),
      };
    });
    yield put({ type: 'SET_MEMBER_LISTINGS', payload: profiles });
    yield put({
      type: 'GET_AGE_DEMO',
    });
    yield put({
      type: 'GET_ETHNICITY_DEMO',
    });
    yield put({
      type: 'GET_GENDER_DEMO',
    });
    yield put({
      type: 'GET_SEX_DEMO',
    });
    yield put({
      type: 'GET_LEVEL_LIST',
    });
    yield put({
      type: 'GET_ABILITY_DEMO',
    });
    yield put({
      type: 'GET_INCOME_DEMO',
    });
    yield put({
      type: 'GET_EDUCATION_DEMO',
    });
    yield put({
      type: 'GET_USER',
    });
    // yield put({ type: 'SET_MEMBER_LISTINGS', payload: response.data });
  } catch (error) {
    console.log('getAllProfiles failed. Please try again.', error);
  }
}

function* updateImageUrl(action) {
  try {
    // const config = {
    //   headers: { 'Content-Type': 'application/json' },
    //   withCredentials: true,
    // };
    // const data = {
    //   imageUrl: action.payload.avatarPath,
    // };
    yield axios.put(
      `/api/imageurl/headshot-update/${action.payload.id}`,
      action.payload
    );
    yield put({
      type: 'FETCH_USER',
      payload: action.payload.id,
    });
  } catch (error) {
    console.log('Image Url post failed: ', error);
  }
}

function* profileSaga() {
  yield takeLatest('GET_PROFILE', getProfile);
  yield takeLatest('UPDATE_PROFILE', updateProfile);
  yield takeLatest('UPDATE_PROFILE_ADMIN', updateProfileAdmin);
  yield takeLatest('FETCH_ALL_PROFILES', getAllProfiles);
  yield takeLatest('UPDATE_USER_HEADSHOT', updateImageUrl);
}

export default profileSaga;
