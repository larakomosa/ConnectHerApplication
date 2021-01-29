const userIndustry = (state = [], action) => {
  console.log('industry reducer', action);
  switch (action.type) {
    case 'SET_USER_INDUSTRY':
      return action.userIndustry;
    default:
      return state;
  }
};

export default userIndustry;
