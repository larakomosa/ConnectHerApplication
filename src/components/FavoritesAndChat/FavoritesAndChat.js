import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar } from 'reactstrap';
import mapStoreToProps from '../../redux/mapStoreToProps';

import FavoriteComponent from './FavoriteComponent';
import ChatComponent from './ChatComponent';
import style_list from '../../styles/list';
import './FavoritesAndChat.css';

const style = style_list.favoritesAndChat;

class FavoritesAndChat extends Component {
  state = {
    chatHover: false,
    favoriteHover: false,
    popupOpen: false,
    type: null,
  };

  toggleHover = (button, condition) => {
    let bool;
    if (condition === 'enter') {
      bool = true;
    } else bool = false;
    this.setState({
      ...this.state,
      chatHover: false,
      favoriteHover: false,
      [button]: bool,
    });
  };

  goToChat = (data) => {
    console.log(data);
    this.setState({
      ...this.state,
      type: 'chat',
    });
  };

  togglePopup = (type) => {
    if (type === 'close') {
      this.setState({
        ...this.state,
        type: null,
        popupOpen: false,
      });
    } else if (this.state.type !== type && this.state.popupOpen === true) {
      this.setState({
        ...this.state,
        type,
      });
    } else {
      let bool;
      if (this.state.popupOpen === false) {
        bool = true;
      } else {
        bool = false;
        type = null;
      }
      this.setState({
        ...this.state,
        type,
        popupOpen: bool,
      });
    }
  };
  render() {
    let Content;
    let PopupBox;

    let popupAnim = 'popupAnimClose';
    let buttonAnim = 'buttonAnimClose';
    let chatIconStyle = style.icon;
    let favoriteIconStyle = style.icon;

    if (this.state.chatHover === true) chatIconStyle = style.iconHover;
    if (this.state.favoriteHover === true) favoriteIconStyle = style.iconHover;
    if (this.state.popupOpen === true) {
      popupAnim = 'popupAnimOpen';
      if (this.state.type === 'favorite') {
        popupAnim = 'popupAnimOpenFavorite';
      }
      buttonAnim = 'buttonAnimOpen';
    }

    PopupBox = (
      <div className={popupAnim} style={style.popupBox}>
        <div
          className="closePopup"
          onClick={() => {
            this.togglePopup('close');
          }}
        >
          <i className="fa fa-times closePopupIcon" />
        </div>
        {this.state.type === 'favorite' && (
          <FavoriteComponent
            openChat={(data) => {
              this.goToChat(data);
            }}
          />
        )}
        {this.state.type === 'chat' && (
          <ChatComponent
            view={() => {
              return this.state.type;
            }}
          />
        )}
      </div>
    );
    if (this.props.store.user.id) {
      Content = (
        <Navbar expand="lg">
          <div style={style.fixedPos}>
            {PopupBox}
            <div
              className={`chatButtonBox ${buttonAnim}`}
              onMouseEnter={() => {
                this.toggleHover('chatHover', 'enter');
              }}
              onMouseLeave={() => {
                this.toggleHover('chatHover', 'leave');
              }}
              onClick={() => {
                this.togglePopup('chat');
              }}
            >
              <div style={{ ...style.iconContainer, marginTop: '2px' }}>
                <i className="fa fa-comment" style={chatIconStyle} />
              </div>
            </div>
            <div
              className={`favoriteButtonBox ${buttonAnim}`}
              onMouseEnter={() => {
                this.toggleHover('favoriteHover', 'enter');
              }}
              onMouseLeave={() => {
                this.toggleHover('favoriteHover', 'leave');
              }}
              onClick={() => {
                this.togglePopup('favorite');
              }}
            >
              <div style={style.iconContainer}>
                <i className="fa fa-heart" style={favoriteIconStyle} />
              </div>
            </div>
          </div>
        </Navbar>
      );
    }
    return <> {Content} </>;
  }
}

export default connect(mapStoreToProps)(FavoritesAndChat);
