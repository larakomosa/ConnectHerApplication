const industries = (state = [], action) => {
  switch (action.type) {
    case 'SET_INDUSTRIES':
      return action.industries;
    default:
      return state;
  }
};

export default industries;
