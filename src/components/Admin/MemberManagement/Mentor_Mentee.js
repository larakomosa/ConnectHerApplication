import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

import Mentor_MenteeItem from './Mentor_MenteeItem';

import './Mentor_Mentee_Admin.css';

class MentorMentee extends Component {
  state = {
    tab: 'mentor',
  };

  toggleTab = (tab) => {
    this.setState({
      tab,
    });
  };
  render() {
    let mentorTabActive = {};
    let menteeTabActive = {};

    if (this.state.tab === 'mentor') {
      mentorTabActive = {
        backgroundColor: '#bceef0',
        color: '#111111d0',
      };
    } else {
      menteeTabActive = {
        backgroundColor: '#bceef0',
        color: '#111111d0',
      };
    }
    return (
      <div className="MM_table_container1" style={{ height: 430 }}>
        <div className="MM_table">
          <div className="MM_table_tr">
            <div
              className="MM_table_td_L MM_br"
              style={mentorTabActive}
              onClick={() => {
                this.toggleTab('mentor');
              }}
            >
              <p className="MM_table_button ">Mentor</p>
            </div>
            <div
              className="MM_table_td_R"
              style={menteeTabActive}
              onClick={() => {
                this.toggleTab('mentee');
              }}
            >
              <p className="MM_table_button">Mentee</p>
            </div>
          </div>
        </div>
        <div className="MM_table_lista" style={{ height: 430 }}>
          {this.props.store.memberListingsReducer.map((member, index) => {
            return (
              <Mentor_MenteeItem
                member={member}
                index={index}
                tab={this.state.tab}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default connect(mapStoreToProps)(MentorMentee);
