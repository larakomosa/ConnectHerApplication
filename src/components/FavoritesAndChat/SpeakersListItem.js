import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class SpeakersListItem extends Component {
  state = {
    toggleDetails: false,
    deleted: false,
  };
  toggleDetails = () => {
    let bool;
    if (this.state.toggleDetails === true) bool = false;
    if (this.state.toggleDetails === false) bool = true;
    this.setState({ ...this.state, toggleDetails: bool });
  };

  delete = () => {
    this.setState(
      {
        delete: true,
      },
      () => {
        this.props.dispatch({
          type: 'PUT_FAVORITES',
          payload: {
            userId: this.props.store.user.id,
            favoriteId: `${this.props.speaker.id}`,
            favoriteType: 'speaker',
          },
        });
      }
    );
  };
  render() {
    let speaker = this.props.speaker;
    console.log(speaker.id);
    let detailsClass = 'tabItemDetailsClose';

    let containerClass = 'tabListItem';

    if (this.state.toggleDetails === true) {
      containerClass = 'tabListItemDetails';
      detailsClass = 'tabItemDetailsOpen';
    }

    let Content = (
      <div className={`${containerClass}`} onClick={this.toggleDetails}>
        <div className="tabProfileImageContainer">
          <img
            className="tabProfileImage"
            src={speaker.fields['Speaker Photo'][0].url}
            alt="img"
          />
        </div>
        <div className="tabNameContainer">
          <p className="tabName">{speaker.fields.Name}</p>
        </div>
        <div className={detailsClass}>
          <div className="detailsDeleteContainer" onClick={this.delete}>
            <p className="detailsDelete">Delete Favorite</p>
          </div>
        </div>
      </div>
    );

    if (this.state.delete === true) Content = <></>;
    return <> {Content} </>;
  }
}

export default connect(mapStoreToProps)(SpeakersListItem);
