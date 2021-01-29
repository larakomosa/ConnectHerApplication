const formReducer = (state = {}, action) => {
  switch (action.type) {
    case 'HOLD_ACCESS':
      return { ...state, access: action.payload };
    case 'HOLD_REGISTER':
      return { ...state, register: action.payload };
    case 'HOLD_ABOUT':
      return { ...state, about: action.payload };
    case 'HOLD_DEMO':
      return { ...state, demo: action.payload };
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default formReducer;
