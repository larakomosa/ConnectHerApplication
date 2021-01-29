const closedFade = {
  top: '0',
  left: '0',
  backgroundImage: 'linear-gradient(to bottom, transparent, #f7fafc)',
  transition: 'all 0.3s 0.08s ease-in-out',
  padding: 0,
  boxShadow: '0 2px 4px #11111150',
};

const openFade = {
  top: '0',
  left: '0',
  backgroundImage: 'none',
  transition: 'all 0.3s 0.08s ease-in-out',
  padding: 0,
  boxShadow: '0 2px 4px #11111150',
};

const closedHeight = {
  maxHeight: '200px',
  position: 'relative',
  top: '0',
  bottom: '0',
  overflow: 'hidden',
  zIndex: '0',
  transition: 'all 0.3s 0.08s cubic-bezier(.17,.67,.83,.67)',
};

const openHeight = {
  maxHeight: '100%',
  position: 'relative',
  top: '0',
  overflow: 'hidden',
  zIndex: '999',
  transition: 'all 0.3s 0.08s cubic-bezier(.17,.67,.83,.67)',
};

const buttonClose = {
  position: 'relative',
  bottom: '13px',
  zIndex: '999',
  transition: 'position 0.3s 0.08s cubic-bezier(.17,.67,.83,.67)',
  borderRadius: '0 0 6px 6px',
};

const buttonOpen = {
  position: 'relative',
  bottom: '25px',
  zIndex: '999',
  transition: 'position 0.3s 0.08s cubic-bezier(.17,.67,.83,.67)',
  borderRadius: '0 0 6px 6px',
};

const profileImage = {
  maxHeight: '160px',
  maxWidth: '160px',
  borderRadius: '50%',
  overflow: 'hidden',
  margin: 'auto',
  border: '3px solid #f7fafc',
  boxShadow: '0 2px 4px #11111150',
  backgroundColor: '#f7fafc',
};

const member = {
  closedFade,
  openFade,
  closedHeight,
  openHeight,
  buttonClose,
  buttonOpen,
  profileImage,
};

export default member;
