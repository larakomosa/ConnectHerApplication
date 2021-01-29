const fixedPos = {
  position: 'fixed',
  bottom: 0,
  right: 0,
  height: '150px',
  width: '75px',
  zIndex: '1000',
};
const navButtonA = {
  marginTop: '1px',
  boxShadow: '0 2px 4px #11111150',
  cursor: 'pointer',
  padding: 0,
  overflow: 'hidden',
  borderRadius: '100% 0 0 100% ',
  backgroundColor: '#17c3ca',
  borderTop: '3px solid white',
  borderLeft: '3px solid white',
  borderBottom: '3px solid white',
  borderRight: '0',
  color: '#f7fafc',
  height: '75px',
  width: '75px',
};

const navButtonB = {
  marginTop: '-1px',
  boxShadow: '0 2px 4px #11111150',
  cursor: 'pointer',
  padding: 0,
  overflow: 'hidden',
  borderRadius: '100% 0 0 100% ',
  backgroundColor: '#17c3ca',
  borderTop: '3px solid white',
  borderLeft: '3px solid white',
  borderBottom: '3px solid white',
  borderRight: '0',
  color: '#f7fafc',
  height: '75px',
  width: '75px',
};

const icon = {
  padding: '4px',
  paddingLeft: '6px',
  color: '#f7fafc',
  fontSize: '50px',
};

const iconHover = {
  paddingTop: '5px',
  paddingBottom: '5px',
  paddingLeft: '8px',
  paddingRight: '4px',
  border: '1px solid transparent',
  color: '#f7fafc',
  fontSize: '46px',
};

const iconContainer = {
  width: '75px',
  heigh: '75px',
  textAlign: 'center',
  marginTop: '7px',
  marginLeft: '0px',
};

const popupBox = {
  boxShadow: '0 2px 8px #11111150',
  backgroundColor: '#f7fafc',
  position: 'fixed',
  bottom: 0,
  right: 0,
  zIndex: '999',
  borderRadius: '5px 0 0 0',
  borderTop: '3px solid #17c3ca40',
  borderLeft: '3px solid #17c3ca40',
};
const favoriteAndChat = {
  fixedPos,
  navButtonA,
  navButtonB,
  icon,
  iconHover,
  iconContainer,
  popupBox,
};

export default favoriteAndChat;
