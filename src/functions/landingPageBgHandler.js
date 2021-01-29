// -----> only needed if making a tag
// import React from 'react';
// import { Container } from 'reactstrap';
// import styles_list from '../styles/list';
// -----> only needed if making a tag

const landingPageBgHandler = (window) => {
  let background;

  // ----> if image width is less than 768 do not display
  if (window.width < 768) {
    background = {
      backgroundImage: `url('LandingBackground.png')`,
      opacity: '0',
    };

    // ----> if image width is greater or equal to 768 do display
  } else if (window.width >= 768) {
    background = {
      // backgroundImage: `url('LandingBackground.png')`, // Bg Image does not work
      backgroundColor: 'black', // Bg Color works
    };
  }

  // -----> returns style object as 'background' to use this put in a tag like

  //          <div style={{...function_list.landingPageBgHandler( height: window.innerHeight, width: window.innerWidth,), 'other styles'}} />
  //            or
  //          <div style={function_list.landingPageBgHandler( height: window.innerHeight, width: window.innerWidth,)} />
  //            or
  //          <div style={background} /> || <div style= {{...background, 'other styles}} />

  // -----> returns style object as 'background' to use this put in a tag like
  return background;
};

export default landingPageBgHandler;
