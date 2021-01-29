const mapSkillColors = (skill_id) => {
  let color;
  switch (skill_id) {
    case 1:
      color = 'primary';
      break;
    case 2:
      color = 'info';
      break;
    case 3:
      color = 'secondary';
      break;
    case 4:
      color = 'success';
      break;
    case 5:
      color = 'danger';
      break;
    case 6:
      color = 'warning';
      break;
    case 7:
      color = 'primary';
      break;
    case 8:
      color = 'info';
      break;
    case 9:
      color = 'secondary';
      break;
    case 10:
      color = 'success';
      break;
    case 11:
      color = 'danger';
      break;
    case 12:
      color = 'warning';
      break;
    default:
      color = 'primary';
      break;
  }
  return color;
};

export default mapSkillColors;
