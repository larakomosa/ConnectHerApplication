import { combineReducers } from 'redux';
import { useDispatch, connect } from 'react-redux';

const age = (state = [], action) => {
  switch (action.type) {
    case 'SET_AGE_DEMO':
      return action.payload;
    default:
      return state;
  }
};

const ethnicity = (state = [], action) => {
  switch (action.type) {
    case 'SET_ETHNICITY_DEMO':
      return action.payload;
    default:
      return state;
  }
};

const gender = (state = [], action) => {
  switch (action.type) {
    case 'SET_GENDER_DEMO':
      return action.payload;
    default:
      return state;
  }
};

const sexualOrientation = (state = [], action) => {
  switch (action.type) {
    case 'SET_SEX_DEMO':
      return action.payload;
    default:
      return state;
  }
};

const ability = (state = [], action) => {
  switch (action.type) {
    case 'SET_ABILITY_DEMO':
      return action.payload;
    default:
      return state;
  }
};

const income = (state = [], action) => {
  switch (action.type) {
    case 'SET_INCOME_DEMO':
      return action.payload;
    default:
      return state;
  }
};

const education = (state = [], action) => {
  switch (action.type) {
    case 'SET_EDUCATION_DEMO':
      return action.payload;
    default:
      return state;
  }
};
// user will be on the redux state at:
// state.user
export default combineReducers({
  age,
  ethnicity,
  gender,
  sexualOrientation,
  ability,
  income,
  education,
});
