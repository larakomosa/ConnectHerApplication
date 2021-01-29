const businessReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_AIRTABLE_BUSINESSES':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default businessReducer;
