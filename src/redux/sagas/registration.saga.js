import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* registerUser(action) {
  try {
    // clear any existing error on the registration page
    yield put({ type: 'CLEAR_REGISTRATION_ERROR' });

    // passes the username and password from the payload to the server
    const response = yield axios.post(
      '/api/user/register',
      action.payload.form.register
    );

    yield put({ type: 'SET_USER', payload: response.data });

    // yield put({
    //   type: 'MEMBER_LEVEL',
    //   payload: action.payload.form.access,
    // });

    console.log({ ...action.payload.form.about, id: response.data.id });

    if (action.payload.form.about.headshot === undefined) {
      action.payload.form.about.headshot = '';
    }
    if (action.payload.form.about.mentor === 'false') {
      action.payload.form.about.mentor = false;
    }
    if (action.payload.form.about.mentee === 'false') {
      action.payload.form.about.mentee = false;
    }
    yield axios.post(
      `/api/form/register/about/${response.data.id}`,
      action.payload.form.about
    ); // { form: props.store.form, id: props.store.user.id }
    yield axios.post(
      `/api/form/register/demographic/${response.data.id}`,
      action.payload.form.demo
    );
    yield axios.post(
      `/api/user/level/${response.data.id}`,
      action.payload.form.access
    );
    console.log('access', action.payload.form.access);
    const skills = action.payload.skills.map((skills) => {
      return skills.id;
    });
    yield axios.post(`/api/skills/add`, { user_id: response.data.id, skills });
    yield put({ type: 'FINISH_REGISTRATION', payload: action.payload });
  } catch (error) {
    console.log('Error with user registration:', error);
    yield put({ type: 'REGISTRATION_FAILED', payload: action.payload });
  }
}

function* finishRegistration(action) {
  try {
    // automatically log a user in after registration
    yield put({ type: 'LOGIN', payload: action.payload.form.register });

    // set to 'login' mode so they see the login screen
    // after registration or after they log out
    yield put({ type: 'SET_TO_LOGIN_MODE' });
  } catch (error) {
    console.log('Error with user registration:', error);
    yield put({ type: 'REGISTRATION_FAILED' });
  }
}

function* registrationSaga() {
  yield takeLatest('REGISTER', registerUser);
  yield takeLatest('FINISH_REGISTRATION', finishRegistration);
}

export default registrationSaga;
