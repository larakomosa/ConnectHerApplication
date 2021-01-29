import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* postForm(action) {
  console.log('made it to registration form saga', action);
  try {
    yield put({
      type: 'REGISTER',
      payload: action.payload,
    });
  } catch (error) {
    console.log('Form failed to submit. Please try again.', error);
  }
}

function* finishSendingData(action) {
  try {
    // yield put({
    //   type: 'MEMBER_LEVEL',
    //   payload: action.payload.form.access,
    // });

    console.log(...action.payload.form.about);

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
      `/api/form/register/about/${action.payload.id}`,
      action.payload.form.about
    ); // { form: props.store.form, id: props.store.user.id }
    yield axios.post(
      `/api/form/register/demographic/${action.payload.id}`,
      action.payload.form.demo
    );
    const skills = action.payload.skills.map((skills) => {
      return skills.id;
    });
    yield axios.post(`/api/skills/add`, { user_id: action.payload.id, skills });
  } catch (error) {
    console.log('Form failed to submit. Please try again.', error);
  }
}

function* formSaga() {
  yield takeLatest('FINAL_SUBMIT', postForm);
  yield takeLatest('FINAL_SUBMIT_FINISH_SENDING_DATA', finishSendingData);
}

export default formSaga;
