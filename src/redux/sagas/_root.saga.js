import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import formSaga from './form.saga';
import airtableSaga from './airtable.saga';
import skillsSaga from './skills.saga';
import profileSaga from './profile.saga';
import skillsCategories from './skillCategories.saga';
import demographicSaga from './demographic.saga';
import favoritesSaga from './favorites.saga';
import memberSaga from './memberLevel.saga';
import chatSaga from './chat.saga';
import personalitySaga from './personality.saga';
import industriesSaga from './industry.saga';
import careerSaga from './careerLevel.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    formSaga(), // handles all form POSTs/GETs
    skillsSaga(),
    airtableSaga(), //handles Airtable GETs
    profileSaga(), //handles user profile GETs/PUTs
    skillsSaga(),
    skillsCategories(),
    demographicSaga(),
    favoritesSaga(),
    memberSaga(),
    chatSaga(),
    personalitySaga(),
    industriesSaga(),
    careerSaga(),
  ]);
}
