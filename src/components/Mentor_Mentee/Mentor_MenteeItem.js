import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import member from '../../styles/member';
import profilePic from './AltImage.jpg';

import function_list from '../../functions/list';

class MentorMenteeItem extends Component {
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
          objectFit: 'cover',
          width: '50px !important',
          height: '50px !important',
          border: '2px solid #f7fafc',
          boxShadow: '0 2px 4px #11111150',
          borderRadius: '50%',
        }}
        className="MM_img"
      />
    );
    if (
      this.props.member.headshot != '' &&
      this.props.member.headshot != null
    ) {
      image = (
        <img
          style={{
            objectFit: 'cover',
            width: '50px !important',
            height: '50px !important',
            border: '2px solid #f7fafc',
            boxShadow: '0 2px 4px #11111150',
            borderRadius: '50%',
          }}
          className="MM_img"
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
      <div className="MM_table_tr_item">
        <div className="MM_item">
          {/* <img
            className="MM_img"
            src={this.props.member.headshot}
            alt="headshot"
          /> */}{' '}
          {image}
          <p className="MM_name">{this.props.member.display_name}</p>
          <div className="MM_details">
            <p className="MM_details_font">{this.props.member.bio}</p>
          </div>{' '}
          <div className="MM_favorites_container">
            <i
              class="fa fa-heart m-1 fa-heart-custom desktop-fav"
              style={{
                color: favoriteIconColor,
              }}
              onClick={this.toggleFavorite}
            />
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
export default connect(mapStoreToProps)(MentorMenteeItem);
