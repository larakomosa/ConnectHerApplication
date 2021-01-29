const listingClickedReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_LISTING_CLICKED':
      return action.payload;
    default:
      return state;
  }
};

export default listingClickedReducer;
