const personality = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PERSONALITY':
      return action.personality;
    default:
      return state;
  }
};

export default personality;
