import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import function_list from '../../functions/list';

class BusinessesListItem extends Component {
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
            favoriteId: `${this.props.business.id}`,
            favoriteType: 'business',
          },
        });
      }
    );
  };

  refreshImage() {
    this.setState({
      ...this.state,
      refreshed: true,
    });
  }

  render() {
    let business = this.props.business;
    let image = undefined;

    if (
      business.fields[
        `Attachments (logo, marketing materials, price sheets, etc.)`
      ] !== undefined
    ) {
      image =
        business.fields[
          `Attachments (logo, marketing materials, price sheets, etc.)`
        ][0].url;
    }

    if (this.state.refreshed !== true) {
      setTimeout(() => {
        this.refreshImage();
      }, 1000);
    }

    let detailsClass = 'tabItemDetailsClose';

    let containerClass = 'tabListItem';

    if (this.state.toggleDetails === true) {
      containerClass = 'tabListItemDetails';
      detailsClass = 'tabItemDetailsOpen';
    }

    let Content = (
      <div className={`${containerClass}`} onClick={this.toggleDetails}>
        <div className="tabProfileImageContainer">
          {function_list.favoritesImage(image)}
        </div>
        <div className="tabNameContainer">
          <p className="tabName">{business.fields[`Organization Name`]}</p>
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

export default connect(mapStoreToProps)(BusinessesListItem);
