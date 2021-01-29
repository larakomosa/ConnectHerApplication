const base = {
  maxHeight: '280px',
  minHeight: '280px',
  border: '0px solid #000',
};

const body = {
  maxHeight: '280px',
  minHeight: '280px',
  boxShadow: '0 2px 4px #11111150',
  borderRadius: '5px',
  padding: '0px',
};

const gradientFade = {
  height: '100px',
  width: '100%',
  borderRadius: '5px 5px 0 0',
  background: 'linear-gradient(to bottom, #bceef0, #f7fafc 80%)',
  border: '2px solid #f7fafc',
  borderBottom: '0px',
};

const heart = {
  width: '100%',
  textAlign: 'right',
  marginLeft: '-15px',
  marginTop: '10px',
};

const detailsImageContainer = {
  cursor: 'pointer',
  marginTop: '-87px',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '125px',
  height: '125px',
  overflow: 'hidden',
  borderRadius: '5px',
  border: '3px solid #f7fafc',
  boxShadow: '0 2px 4px #11111150',
  backgroundColor: '#f7fafc',
};

const detailsTitle = {
  fontFamily: 'cabin',
  color: '#111111d0',
  width: '95%',
  marginLeft: 'auto',
  marginRight: 'auto',
  fontWeight: 'bold',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  marginTop: '5px',
};

const detailsP1 = {
  fontFamily: 'cabin',
  color: '#11111150',
  fontSize: '15px',
  width: '100%',
  textAlign: 'center',
  margin: '0px',
  height: '25px',
  maxHeight: '25px',
};

const detailsP2 = {
  fontFamily: 'cabin',
  color: '#11111150',
  fontSize: '13px',
  width: '100%',
  textAlign: 'center',
  height: '24px',
  maxHeight: '24px',
};

const learnMoreButton = {
  marginTop: '-21px',
  fontSize: '16px',
  width: '85%',
  marginLeft: 'auto',
  marginRight: 'auto',
  backgroundColor: '#17c3ca',
  border: '1px solid #17c3ca',
  color: '#f7fafc',
  boxShadow: '0 2px 4px #11111150',
};

const card = {
  base,
  body,
  gradientFade,
  heart,
  detailsImageContainer,
  detailsTitle,
  detailsP1,
  detailsP2,
  learnMoreButton,
};
export default card;
