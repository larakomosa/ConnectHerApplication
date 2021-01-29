import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import SpeakersListItem from './SpeakersListItem';

class MembersList extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_AIRTABLE_SPEAKER',
    });
  }

  render() {
    return (
      <div style={{ maxHeight: '303px', overflow: 'scroll' }}>
        {this.props.store &&
          this.props.store.speakers &&
          this.props.store.speakers.map((speaker, index) => {
            if (
              speaker.fields['Speaker Photo'] !== undefined &&
              speaker.fields['Speaker Photo'][0] !== undefined
            ) {
              for (
                let i = 0;
                i < this.props.store.favorites.speaker.length;
                i++
              ) {
                if (speaker.id == this.props.store.favorites.speaker[i]) {
                  return <SpeakersListItem speaker={speaker} index={index} />;
                }
              }
            }
          })}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(MembersList);
