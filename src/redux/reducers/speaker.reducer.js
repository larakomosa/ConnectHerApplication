const speakerReducer = (state = [], action) => {
  //changed from object to an array because you can't map an object
  switch (action.type) {
    case 'SET_AIRTABLE_SPEAKER':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default speakerReducer;
