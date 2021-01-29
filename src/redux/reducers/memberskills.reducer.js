const memberskills = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SKILL':
      const exists = state.filter((item) => {
        return item.id === action.payload.id;
      });
      if (exists.length === 1) {
        return state;
      } else {
        return [...state, action.payload];
      }
    case 'REMOVE_SKILL':
      const newState = state.filter((skill) => {
        return skill.id !== action.payload;
      });
      return newState;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default memberskills;
