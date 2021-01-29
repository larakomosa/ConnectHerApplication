import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import member from '../../styles/member';
// import profilePic from './profilePic.jpg';

class MembershipLevelItem extends Component {
  render() {
    return (
      <div className="MM_table_tr_itema">
        <div className="MM_itema">
          <p className="MM_named">{this.props.member.name}</p>
        </div>
      </div>
    );
  }
}
export default connect(mapStoreToProps)(MembershipLevelItem);
