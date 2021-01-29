import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import MembersList from './MembersList';
import SpeakersList from './SpeakersList';
import BusinessesList from './BusinessesList';
import SpacesList from './SpacesList';

class FavoriteComponent extends Component {
  state = {
    view: undefined,
  };

  toggleView = (view) => {
    this.setState({
      view,
    });
  };
  render() {
    let Content = (
      <>
        <div
          className="favoriteOption"
          onClick={() => {
            this.toggleView('members');
          }}
        >
          <p className="favoriteOptionTitle">Members</p>
        </div>

        <div
          className="favoriteOption"
          onClick={() => {
            this.toggleView('speakers');
          }}
        >
          <p className="favoriteOptionTitle">Speakers</p>
        </div>
        <div
          className="favoriteOption"
          onClick={() => {
            this.toggleView('businesses');
          }}
        >
          <p className="favoriteOptionTitle">Businesses</p>
        </div>
        <div
          className="favoriteOption"
          onClick={() => {
            this.toggleView('spaces');
          }}
        >
          <p className="favoriteOptionTitle">Spaces</p>
        </div>
      </>
    );

    if (this.state.view === 'members') {
      Content = (
        <MembersList
          openChat={(data) => {
            this.props.openChat(data);
          }}
        />
      );
    }

    if (this.state.view === 'speakers') {
      Content = <SpeakersList />;
    }

    if (this.state.view === 'businesses') {
      Content = <BusinessesList />;
    }

    if (this.state.view === 'spaces') {
      Content = <SpacesList />;
    }
    return (
      <>
        <div className="favoriteTitleBox">
          <h2 className="favoriteTitle">Favorites</h2>
        </div>
        {this.state.view && (
          <div
            className="popupReturn"
            onClick={() => {
              this.toggleView(undefined);
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

export default connect(mapStoreToProps)(FavoriteComponent);
