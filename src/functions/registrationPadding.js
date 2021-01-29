const registrationPadding = (window) => {
  let paddingAmount = 15;

  if (window.width < 576) {
    paddingAmount = 4;
  } else if (window.width < 768) {
    paddingAmount = 5;
  } else if (window.width < 1000) {
    paddingAmount = 10;
  } else if (window.width < 1200) {
    paddingAmount = 13;
  }

  const paddingV = paddingAmount / 4 + '%';
  const paddingH = paddingAmount + '%';

  const paddingObj = {
    padding: paddingV + paddingH,
  };
  return paddingObj;
};

export default registrationPadding;
