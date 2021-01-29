import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';

import form from './form.reducer';
import skillsholder from './skillsholder.reducer';
import memberskills from './memberskills.reducer';
import profile from './profile.reducer';
import speakers from './speaker.reducer';
import spaces from './spaces.reducer';
import businesses from './businesses.reducer';
import imageUrlReducer from './image-upload.reducer';
import memberListingsReducer from './memberListings.reducer';
import listingClickedReducer from './listingClicked.reducer';
import skillCategories from './skillCategories.reducer';
import demographicReducer from './demographic.reducer';
import favorites from './favorites.reducer';
import memberLevel from './memberLevel.reducer';
import chat from './chat.reducer';
import industries from './industries.reducer';
import careerLevel from './careerLevel.reducer';
import userCareerLevel from './userCareerLevel.reducer';
import userIndustry from './userIndustry.reducer';
import countsReducer from './counts.reducer';
import personality from './personality.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  form, // used to store form data for submission
  skillsholder, // receive skills from db to show on widget
  memberskills, // holds skills while user selects before submission
  speakers,
  spaces,
  businesses,
  imageUrlReducer,
  memberListingsReducer,
  listingClickedReducer,
  profile,
  skillCategories,
  demographicReducer,
  favorites,
  memberLevel,
  chat,
  industries,
  careerLevel,
  userCareerLevel,
  userIndustry,
  countsReducer,
  personality,
});

export default rootReducer;
