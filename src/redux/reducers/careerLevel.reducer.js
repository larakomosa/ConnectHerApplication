const careerLevel = (state = [], action) => {
  switch (action.type) {
    case 'SET_CAREER_LEVELS':
      return action.careerLevel;
    default:
      return state;
  }
};

export default careerLevel;
