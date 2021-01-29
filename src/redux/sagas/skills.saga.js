import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { connect_service } from '../../services/connect_service';

// worker Saga: will be fired on "FETCH_USER" actions
function* getSkills(action) {
  try {
    const response = yield axios.get('/api/skills/all');
    const leadershipList = response.data.filter((skill) => {
      return skill.category_id === 1;
    });
    const businessList = response.data.filter((skill) => {
      return skill.category_id === 2;
    });
    const marketingList = response.data.filter((skill) => {
      return skill.category_id === 3;
    });
    const technicalList = response.data.filter((skill) => {
      return skill.category_id === 4;
    });
    const financeList = response.data.filter((skill) => {
      return skill.category_id === 5;
    });
    const legalList = response.data.filter((skill) => {
      return skill.category_id === 6;
    });
    const healthList = response.data.filter((skill) => {
      return skill.category_id === 7;
    });
    const hrList = response.data.filter((skill) => {
      return skill.category_id === 8;
    });
    const educationList = response.data.filter((skill) => {
      return skill.category_id === 9;
    });
    const creativesList = response.data.filter((skill) => {
      return skill.category_id === 10;
    });
    const communityList = response.data.filter((skill) => {
      return skill.category_id === 11;
    });
    const civicList = response.data.filter((skill) => {
      return skill.category_id === 12;
    });
    yield put({
      type: 'SET_SKILLS',
      payload: [
        leadershipList,
        businessList,
        marketingList,
        technicalList,
        financeList,
        legalList,
        healthList,
        hrList,
        educationList,
        creativesList,
        communityList,
        civicList,
      ],
    });
  } catch (error) {
    console.log('Form failed to submit. Please try again.', error);
  }
}

function* getAllSkills(action) {
  try {
    const response = yield connect_service.get('/skills/all');
    yield put({
      type: 'SET_ALL_SKILLS',
      payload: response.data,
    })
  } catch (err) {
    console.log('Error retreiving ALL SKILLS');
  }
}

function* getProfileSkills(action) {
  try {
    const response = yield axios.get(
      `/api/skills/profile-list/${action.payload}`
    );
    yield put({
      type: 'SET_PROFILE_SKILLS',
      payload: response.data,
    });
  } catch (error) {
    alert('Skills failed to load. Please go back and try again');
  }
}

function* skillsSaga() {
  yield takeLatest('GET_SKILLS', getSkills);
  yield takeLatest('GET_ALL_SKILLS', getAllSkills);
  yield takeLatest('GET_PROFILE_SKILLS', getProfileSkills);
  // yield takeLatest('FINAL_SUBMIT', );
}

export default skillsSaga;
