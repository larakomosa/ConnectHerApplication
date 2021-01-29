const skillsholder = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SKILLS':
      return {
        'Leadership': action.payload[0],
        'Business and Entreprenuership': action.payload[1],
        "Marketing and Sales": action.payload[2],
        "Technical Skills": action.payload[3],
        "Accounting and Finance": action.payload[4],
        "Legal": action.payload[5],
        "Health and Wellness": action.payload[6],
        "Human Resources": action.payload[7],
        "Education": action.payload[8],
        "Artists and Creatives": action.payload[9],
        "Community Advocacy": action.payload[10],
        "Civic Engagement": action.payload[11],
      };
    case 'SET_ALL_SKILLS':
      return {
        ...state,
        allSkills: action.payload,
      }
    default:
      return state;
  }
};

export default skillsholder;
