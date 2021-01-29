const imageUrlReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_USER_HEADSHOT':
      return action.careerLevel;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default imageUrlReducer;
