const memberLevel = (state = [], action) => {
  console.log('made it to the set level reducer', action);
  switch (action.type) {
    case 'SET_LEVEL_LIST':
      return action.payload;
    default:
      return state;
  }
};

export default memberLevel;
