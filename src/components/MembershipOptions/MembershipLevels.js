import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import MembershipLevelItem from './MembershipLevelItem';

class Member extends Component {
  render() {
    return (
      <div className="MM_table_container">
        <div className="MM_table">
          <div className="MM_table_tr">
            <div
              className="MM_table_td_M"
              style={{
                backgroundColor: '#bceef0',
                color: '#111111d0',
                width: '100%',
              }}
            >
              <p className="MM_table_button ">Member Level </p>
            </div>
          </div>
        </div>
        <div className="MM_table_lista" style={{ height: 430 }}>
          {this.props.store.memberListingsReducer.map((member, index) => {
            return (
              <MembershipLevelItem member={member} key={member.email} tab={1} />
            );
          })}
        </div>
      </div>
    );
  }
}
export default connect(mapStoreToProps)(Member);
