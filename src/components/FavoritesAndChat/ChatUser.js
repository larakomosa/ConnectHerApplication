import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import profilePic from './profilePic.jpg';

class ChatUser extends Component {
  state = {
    view: undefined,
  };

  render() {
    let image = (
      <img
        src={profilePic}
        alt="profile headshot"
        className="tabProfileImage"
      />
    );
    if (this.props.user.headshot != '' && this.props.user.headshot != null) {
      image = (
        <img
          className="tabProfileImage"
          src={this.props.user.headshot}
          alt="alternative"
        />
      );
    }
    return (
      <div
        key={this.props.index}
        className="tabListItem"
        onClick={() => {
          this.props.toggleView({
            view: 'chat',
            userId: this.props.user.user_id,
            chatInstance: this.props.chatInstance,
          });
        }}
      >
        <div className="tabProfileImageContainer">{image}</div>
        <div className="tabNameContainer">
          <p className="tabName">{this.props.user.display_name}</p>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(ChatUser);
