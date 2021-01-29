import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import mapStoreToProps from '../../redux/mapStoreToProps';
import SpeakerList from '../../components/SpeakerList/SpeakerList';
import style_list from '../../styles/list';

class SpeakerPage extends Component {
  state = { defaultModal: false, isOpen: false };
  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_AIRTABLE_SPEAKER',
    });
  }

  render() {
    return (
      <Container>
        <h1 className="spaces-laptop" style={style_list.pageTitles.laptop}>
          Speakers
        </h1>
        <h1 className="spaces-tablet" style={style_list.pageTitles.tablet}>
          Speakers
        </h1>
        <h1 className="spaces-phone" style={style_list.pageTitles.phone}>
          Speakers
        </h1>
        <Row>
          {this.props.store &&
            this.props.store.speakers &&
            this.props.store.speakers.map((speaker, index) => {
              return (
                <Col lg={4} md={6} sm={12} className="col-spacing">
                  <SpeakerList speaker={speaker} key={index} />
                </Col>
              );
            })}
        </Row>
      </Container>
    );
  }
}

export default connect(mapStoreToProps)(SpeakerPage);
