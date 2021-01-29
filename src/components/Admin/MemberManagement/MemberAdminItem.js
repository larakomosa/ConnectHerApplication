import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import member from '../../../styles/member';
import profilePic from './profilePic.jpg';
import './Mentor_Mentee_Admin.css';
import EditButton from '../../AdminMemberItem/AdminMemberItem';

import function_list from '../../../functions/list';

class MemberAdminItem extends Component {
  state = {
    isFavorite: null,
  };

  toggleFavorite = () => {
    if (
      function_list.checkFavorite({
        id: this.props.member.user_id,
        array: this.props.store.favorites.member,
      }) === false
    ) {
      this.setState(
        {
          ...this.state,
          isFavorite: true,
        },
        () => {
          this.props.dispatch({
            type: 'POST_FAVORITES',
            payload: {
              userId: this.props.store.user.id,
              favoriteId: `${this.props.member.user_id}`,
              favoriteType: 'member',
            },
          });
        }
      );
    } else {
      this.setState(
        {
          ...this.state,
          isFavorite: false,
        },
        () => {
          this.props.dispatch({
            type: 'PUT_FAVORITES',
            payload: {
              userId: this.props.store.user.id,
              favoriteId: `${this.props.member.user_id}`,
              favoriteType: 'member',
            },
          });
        }
      );
    }
  };

  render() {
    let image = (
      <img
        src={profilePic}
        alt="profile headshot"
        style={{
          marginLeft: '10px',
          objectFit: 'cover',
          width: '50px',
          height: '50px',
          border: '2px solid #f7fafc',
          boxShadow: '0 2px 4px #11111150',
          borderRadius: '50%',
          marginTop: '4px',
          marginBottom: '4px',
        }}
        className="profile-pic card-profile-image mb-2"
      />
    );
    if (
      this.props.member.headshot != '' &&
      this.props.member.headshot != null
    ) {
      image = (
        <img
          style={{
            marginLeft: '10px',
            objectFit: 'cover',
            width: '50px',
            height: '50px',
            border: '2px solid #f7fafc',
            boxShadow: '0 2px 4px #11111150',
            borderRadius: '50%',
            marginTop: '4px',
            marginBottom: '4px',
          }}
          className="profile-pic card-profile-image mb-2"
          src={this.props.member.headshot}
          alt="alternative"
        />
      );
    }
    let favoriteIconColor = function_list.favoriteIconHandler(false);

    if (
      function_list.checkFavorite({
        id: this.props.member.user_id,
        array: this.props.store.favorites.member,
      }) === true
    ) {
      favoriteIconColor = function_list.favoriteIconHandler(true);
    }

    let Content = (
      <div className="MM_table_tr_itema">
        <div className="MM_itema">
          {image}
          <p className="MM_namea">{this.props.member.display_name}</p>
          <div
            className="MM_detailsAdmin"
            style={{ borderRight: '0px', padding: '3%' }}
          >
            <EditButton member={this.props.member} />
          </div>
        </div>
      </div>
    );

    if (this.props.tab === 'mentor') {
      if (this.props.member.mentor !== true) {
        Content = <></>;
      }
    }

    if (this.props.tab === 'mentee') {
      if (this.props.member.mentee !== true) {
        Content = <></>;
      }
    }
    return <>{Content}</>;
  }
}
export default connect(mapStoreToProps)(MemberAdminItem);
