import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const LogOutButton = (props) => (
  // <button
  //   // This button shows up in multiple locations and is styled differently
  //   // because it's styled differently depending on where it is used, the className
  //   // is passed to it from it's parents through React props
  //   className={props.className}
  //   onClick={() => props.dispatch({ type: 'LOGOUT' })}
  // >
  //   Log Out
  // </button>
  <Link
    className="nav-line text-nowrap ml-2"
    onClick={() => props.dispatch({ type: 'LOGOUT' })}
  >
    <i
      className="fa fa-key m-1"
      aria-hidden="true"
      style={{ fontSize: '25px', color: '#17c3ca' }}
    />
    <span style={{ fontFamily: 'cabin', fontSize: '20px', color: ' #17c3ca' }}>
      Log Out
    </span>
  </Link>
);

// This component doesn't need 'mapStateToProps'
// because it doesn't care what the current state is.
// No matter what the redux state is, this button will always be a log out button
// this component still needs 'connect' though, because it is going to dispatch a redux action
export default connect()(LogOutButton);
