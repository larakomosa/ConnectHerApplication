import React from 'react';
import './Footer.css';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const Footer = () => (
  <footer>
    &copy; An <span style={{ color: '#7A38A6' }}>Innovate</span>
    <span style={{ color: '#F59032' }}>HER</span>{' '}
    <span style={{ color: '#1BBFBF' }}>KC</span> Space | Built with{' '}
    <i className="fa fa-heartbeat" /> by Prime Digital Academy
  </footer>
);

export default Footer;
