const chatReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CHAT_INSTANCES':
      return action.payload;
    default:
      return state;
  }
};

export default chatReducer;
