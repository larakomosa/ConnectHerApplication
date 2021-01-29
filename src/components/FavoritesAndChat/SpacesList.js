import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import SpacesListItem from './SpacesListItem';

class SpacesList extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_AIRTABLE_SPACES',
    });
  }

  render() {
    return (
      <div style={{ maxHeight: '303px', overflow: 'scroll' }}>
        {this.props.store &&
          this.props.store.spaces &&
          this.props.store.spaces.map((space, index) => {
            for (let i = 0; i < this.props.store.favorites.space.length; i++) {
              if (space.id == this.props.store.favorites.space[i]) {
                return <SpacesListItem space={space} index={index} />;
              }
            }
          })}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(SpacesList);
