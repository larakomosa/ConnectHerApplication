const memberListingsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_MEMBER_LISTINGS':
      return action.payload;
    default:
      return state;
  }
};

export default memberListingsReducer;
