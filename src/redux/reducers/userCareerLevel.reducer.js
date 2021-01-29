const userCareerLevel = (state = [], action) => {
  switch (action.type) {
    case 'SET_USER_CAREER':
      return action.userCareer;
    default:
      return state;
  }
};

export default userCareerLevel;
