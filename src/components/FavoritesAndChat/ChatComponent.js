import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import ChatUser from './ChatUser';
import ChatBox from './ChatBox';
import function_list from '../../functions/list';

class ChatComponent extends Component {
  state = {
    view: undefined,
    userId: undefined,
    chatInstance: undefined,
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_ALL_PROFILES',
    });
    this.props.dispatch({
      type: 'GET_CHAT_INSTANCES',
      payload: this.props.store.user.id,
    });

    let heldData = { ...function_list.holdSwitchToChatData({ type: 'get' }) };

    if (heldData.chatInstance === false) {
      this.props.dispatch({
        type: 'POST_CHAT_INSTANCE',
        payload: { user1: this.props.store.user.id, user2: heldData.userId },
      });
      const waitForData = () => {
        setTimeout(() => {
          heldData = {
            ...heldData,
            chatInstance: function_list.doesChatInstanceExist({
              list: this.props.store.chat,
              myId: this.props.store.user.id,
              userId: heldData.userId,
            }),
          };
          if (heldData.chatInstance === false) {
            waitForData();
          } else {
            this.setState({
              ...heldData,
            });
          }
        }, 250);
      };
      waitForData();
    } else {
      this.setState({
        ...heldData,
      });
    }
  }

  toggleView = (data) => {
    this.setState({
      view: data.view,
      userId: data.userId,
      chatInstance: data.chatInstance,
    });
  };

  getState = () => {
    return { view1: this.state.view, view2: this.props.view() };
  };
  render() {
    let chatInstance = function_list.getUsersForChat(
      this.props.store.user.id,
      this.props.store.chat
    );
    let Content;

    let Title = <h2 className="favoriteTitle">Chat</h2>;

    if (this.state.view === undefined || this.state.chatInstance === false) {
      Content = (
        <>
          {chatInstance.map((member, index) => {
            for (
              let i = 0;
              i < this.props.store.memberListingsReducer.length;
              i++
            ) {
              if (
                member.user == this.props.store.memberListingsReducer[i].user_id
              ) {
                return (
                  <ChatUser
                    user={this.props.store.memberListingsReducer[i]}
                    chatInstance={member.chatId}
                    index={index}
                    view={this.state.view}
                    toggleView={(data) => {
                      this.toggleView(data);
                    }}
                  />
                );
              }
            }
          })}
        </>
      );
    } else {
      Content = (
        <ChatBox
          chatInstance={this.state.chatInstance}
          getState={this.getState}
        />
      );
      for (let i = 0; i < this.props.store.memberListingsReducer.length; i++)
        if (
          this.props.store.memberListingsReducer[i].user_id ===
          this.state.userId
        ) {
          Title = (
            <h2 className="favoriteTitle">
              {this.props.store.memberListingsReducer[i].display_name}
            </h2>
          );
        }
    }

    return (
      <>
        <div className="favoriteTitleBox">{Title}</div>
        {this.state.view && (
          <div
            className="popupReturn"
            onClick={() => {
              this.toggleView({
                view: undefined,
                userId: undefined,
                chatInstance: undefined,
              });
            }}
          >
            <i className="fa fa-arrow-left popupReturnIcon" />
          </div>
        )}
        {Content}
      </>
    );
  }
}

export default connect(mapStoreToProps)(ChatComponent);
