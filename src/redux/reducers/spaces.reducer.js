const spacesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_AIRTABLE_SPACES':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default spacesReducer;
