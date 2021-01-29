const profileReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_MY_PROFILE':
      return action.payload;
    case 'SET_PROFILE_SKILLS':
      return { ...state, skills: action.payload };
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default profileReducer;
