const getNextGraph = (move, state) => {
  let newState;

  if (move === 'left') {
    if (state.titleNum === 1) {
      newState = {
        title: 'Ability',
        titleNum: 7,
      };
    } else if (state.titleNum === 2) {
      newState = {
        title: 'Age',
        titleNum: 1,
      };
    } else if (state.titleNum === 3) {
      newState = {
        title: 'Ethnicity',
        titleNum: 2,
      };
    } else if (state.titleNum === 4) {
      newState = {
        title: 'Gender Identity',
        titleNum: 3,
      };
    } else if (state.titleNum === 5) {
      newState = {
        title: 'Sexual Orientation',
        titleNum: 4,
      };
    } else if (state.titleNum === 6) {
      newState = {
        title: 'Education',
        titleNum: 5,
      };
    } else if (state.titleNum === 7) {
      newState = {
        title: 'Income',
        titleNum: 6,
      };
    }
  } else {
    if (state.titleNum === 1) {
      newState = {
        title: 'Ethnicity',
        titleNum: 2,
      };
    } else if (state.titleNum === 2) {
      newState = {
        title: 'Gender Identity',
        titleNum: 3,
      };
    } else if (state.titleNum === 3) {
      newState = {
        title: 'Sexual Orientation',
        titleNum: 4,
      };
    } else if (state.titleNum === 4) {
      newState = {
        title: 'Education',
        titleNum: 5,
      };
    } else if (state.titleNum === 5) {
      newState = {
        title: 'Income',
        titleNum: 6,
      };
    } else if (state.titleNum === 6) {
      newState = {
        title: 'Ability',
        titleNum: 7,
      };
    } else if (state.titleNum === 7) {
      newState = {
        title: 'Age',
        titleNum: 1,
      };
    }
  }

  return newState;
};

export default getNextGraph;
