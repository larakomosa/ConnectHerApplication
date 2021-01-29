import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import function_list from '../../functions/list';

let lastKey;

class ChatBox extends Component {
  state = {
    input: '',
    view: 'closed',
  };

  componentDidMount() {
    let chatBox = document.getElementById('chatBox');
    chatBox.scrollTop = chatBox.scrollHeight;
    this.listenForMessages();
  }

  componentDidUpdate() {
    this.chatScrollToBottom();
  }

  listenForMessages = () => {
    if (this.props.getState().view1 !== undefined) {
      if (this.props.getState().view2 !== null) {
        setTimeout(() => {
          this.props.dispatch({
            type: 'GET_CHAT_INSTANCES',
            payload: this.props.store.user.id,
          });
          this.listenForMessages();
        }, 5000);
      }
    }
  };

  chatScrollToBottom = () => {
    let chatBox = document.getElementById('chatBox');

    if (chatBox !== null) {
      setTimeout(() => {
        chatBox.scrollTop = chatBox.scrollHeight;
      }, 250);
    } else {
      chatBox = document.getElementById('chatBoxOpened');
      setTimeout(() => {
        chatBox.scrollTop = chatBox.scrollHeight;
      }, 250);
    }
  };

  toggleView = () => {
    let view;
    if (this.state.view === 'closed') view = 'opened';
    if (this.state.view === 'opened') view = 'closed';

    this.setState({
      ...this.state,
      view,
    });
  };

  updateText = (event) => {
    this.setState({
      ...this.state,
      input: event.target.value,
    });
  };

  sendMessage = () => {
    this.props.dispatch({
      type: 'SEND_MESSAGE',
      payload: {
        chatId: this.props.chatInstance,
        user: this.props.store.user.id,
        message: this.state.input,
      },
    });

    this.setState({
      ...this.state,
      input: '',
    });
  };

  handleKeyDown = (event) => {
    // if (lastKey !== 'Shift') {
    //   if (event.key === 'Enter') {
    //     this.sendMessage();
    //   }
    // }
    // lastKey = event.key;
  };

  handleDoubleClick = (input) => {
    if (input === 'Click') {
      if (lastKey === 'Click') {
        this.toggleView();
      } else {
        lastKey = 'Click';
      }
    }
    this.doubleClickTimer();
  };

  doubleClickTimer = () => {
    setTimeout(() => {
      lastKey = '';
    }, 300);
  };

  isMessageMine = (id) => {
    if (id == this.props.store.user.id) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    console.log(this.props.chatInstance, this.props.store.chat);
    const messages = function_list.getMessagesForChatInstance(
      this.props.chatInstance,
      this.props.store.chat
    );
    console.log(messages);
    let Content = (
      <div className="chatBoxContainer">
        <div className="chatBox" id="chatBox">
          {messages &&
            messages.map((message, index) => {
              let leftImage = '0%';
              let rightImage = '100%';
              let imageSrc = '';
              if (message.user !== this.props.store.user.id) {
                leftImage = '100%';
                rightImage = '0%';
              }
              for (
                let i = 0;
                i < this.props.store.memberListingsReducer.length;
                i++
              ) {
                if (
                  message.user ===
                  this.props.store.memberListingsReducer[i].user_id
                ) {
                  imageSrc = this.props.store.memberListingsReducer[i].headshot;
                }
              }

              return (
                <div className="messageItem">
                  <div
                    className="messageImageContainerMarginFix"
                    style={{ opacity: leftImage }}
                  >
                    <div
                      className="messageImageContainer"
                      style={{
                        marginTop: function_list.chatMessageHeight(
                          message.message
                        ),
                      }}
                    >
                      <img className="messageImage" src={imageSrc} alt="img" />
                    </div>
                  </div>
                  <div className="messageTextContainer">
                    <textarea
                      readOnly
                      className="messageText"
                      style={{
                        height: function_list.chatMessageHeight(
                          message.message
                        ),
                      }}
                      value={message.message}
                    />
                  </div>
                  <div
                    className="messageImageContainerMarginFix"
                    style={{ marginLeft: '2px', opacity: rightImage }}
                  >
                    <div
                      className="messageImageContainer"
                      style={{
                        marginTop: function_list.chatMessageHeight(
                          message.message
                        ),
                      }}
                    >
                      <img className="messageImage" src={imageSrc} alt="img" />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="chatMessengerBox">
          <textarea
            className="chatBoxInput"
            onInput={this.updateText}
            onClick={() => {
              this.handleDoubleClick('Click');
            }}
            value={this.state.input}
            maxLength={256}
            onKeyDown={this.handleKeyDown}
          ></textarea>

          <div className="chatBoxSend" onClick={this.sendMessage}>
            <p className="chatBoxSendText">Send</p>
          </div>
        </div>
        <p className="chatBoxCharaLeft">{`Characters left : ${
          256 - this.state.input.length
        }`}</p>
      </div>
    );

    if (this.state.view === 'opened') {
      Content = (
        <div className="chatBoxContainerOpened">
          <div className="chatBoxOpened" id="chatBoxOpened">
            {messages.map((message, index) => {
              let leftImage = '0%';
              let rightImage = '100%';
              let imageSrc = '';
              if (message.user !== this.props.store.user.id) {
                leftImage = '100%';
                rightImage = '0%';
              }
              for (
                let i = 0;
                i < this.props.store.memberListingsReducer.length;
                i++
              ) {
                if (
                  message.user ===
                  this.props.store.memberListingsReducer[i].user_id
                ) {
                  imageSrc = this.props.store.memberListingsReducer[i].headshot;
                }
              }
              return (
                <div className="messageItem">
                  <div
                    className="messageImageContainerMarginFix"
                    style={{ opacity: leftImage }}
                  >
                    <div
                      className="messageImageContainer"
                      style={{
                        marginTop: function_list.chatMessageHeight(
                          message.message
                        ),
                      }}
                    >
                      <img className="messageImage" src={imageSrc} alt="img" />
                    </div>
                  </div>
                  <div className="messageTextContainer">
                    <textarea
                      readOnly
                      className="messageText"
                      style={{
                        height: function_list.chatMessageHeight(
                          message.message
                        ),
                      }}
                      value={message.message}
                    />
                  </div>
                  <div
                    className="messageImageContainerMarginFix"
                    style={{ marginLeft: '2px', opacity: rightImage }}
                  >
                    <div
                      className="messageImageContainer"
                      style={{
                        marginTop: function_list.chatMessageHeight(
                          message.message
                        ),
                      }}
                    >
                      <img className="messageImage" src={imageSrc} alt="img" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="chatMessengerBoxOpened">
            <textarea
              className="chatBoxInputOpened"
              onInput={this.updateText}
              onClick={() => {
                this.handleDoubleClick('Click');
              }}
              value={this.state.input}
              maxLength={256}
              onKeyDown={this.handleKeyDown}
            ></textarea>
            <div className="chatBoxSendOpened" onClick={this.sendMessage}>
              <p className="chatBoxSendText">Send</p>
            </div>
          </div>
          <p className="chatBoxCharaLeftOpened">{`Characters left : ${
            256 - this.state.input.length
          }`}</p>
        </div>
      );
    }
    return <> {Content} </>;
  }
}

export default connect(mapStoreToProps)(ChatBox);
