import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

import function_list from '../../../functions/list';

import './Member.css';
import MemberAdminItem from './MemberAdminItem';

class Member extends Component {
  render() {
    let results = [];
    if (this.props.results !== undefined) {
      results = this.props.results;
    }
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
              <p className="MM_table_button ">Member's List</p>
            </div>
          </div>
        </div>
        <div className="MM_table_lista" style={{ height: 430 }}>
          {results.map((member, index) => {
            return (
              <MemberAdminItem member={member} key={member.email} tab={1} />
            );
          })}
        </div>
      </div>
    );
  }
}
export default connect(mapStoreToProps)(Member);
