import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import MemberList from '../MemberList/MemberList';

// Displays results when placed in the Search Option map function
class ProfileResults extends Component {
  state = {
    selectedSkills: [],
  };

  selectSkill = (skill) => () => {
    this.props.dispatch({
      type: 'ADD_SKILL',
      payload: skill,
    });
  };

  render() {
    return (
      <>
        <MemberList members={this.props.results} />
      </>
    );
  }
}

export default connect(mapStoreToProps)(ProfileResults);
