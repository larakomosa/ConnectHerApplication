import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import React from 'react';
import { Button, Row, Col, Card, CardBody, Modal, ModalBody } from 'reactstrap';

import function_list from '../../functions/list'; // custom functions object
import style_list from '../../styles/list'; // custom styles object

class SpeakerList extends React.Component {
  state = {
    status: false, //'false' = '+' AND 'true' = '-'
    defaultModal: false,
    isOpen: false,
    isFavorite: false,
  };

  componentDidMount() {
    document.title = 'Find a Speaker';
    if (
      function_list.checkFavorite({
        id: this.props.speaker.id,
        array: this.props.store.favorites.speaker,
      }) === true
    )
      this.setState({ ...this.state, isFavorite: true });
  }

  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };

  cellToggle = () => {
    this.setState({
      status: !this.state.status,
    });
  };

  /*-----> CASTOR <-----*/
  toggleFavorite = () => {
    if (
      function_list.checkFavorite({
        id: this.props.speaker.id,
        array: this.props.store.favorites.speaker,
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
              favoriteId: `${this.props.speaker.id}`,
              favoriteType: 'speaker',
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
              favoriteId: `${this.props.speaker.id}`,
              favoriteType: 'speaker',
            },
          });
        }
      );
    }
  };
  /*-----> CASTOR <-----*/

  render() {
    let favoriteIconColor = function_list.favoriteIconHandler(false);

    if (
      function_list.checkFavorite({
        id: this.props.speaker.id,
        array: this.props.store.favorites.speaker,
      }) === true
    ) {
      favoriteIconColor = function_list.favoriteIconHandler(true);
    }

    return (
      <>
        <Card
          style={style_list.card.base}
          className="card-adjust bg-secondary shadow ml-0 mr-0 mb-3"
        >
          <CardBody style={style_list.card.body}>
            <div style={style_list.card.gradientFade}>
              <div style={style_list.card.heart}>
                <i
                  className="fa fa-heart m-1 fa-heart-custom"
                  style={{
                    color: favoriteIconColor,
                  }}
                  onClick={this.toggleFavorite}
                />
              </div>
            </div>
            <Row>
              <Col lg={{ size: 12, order: 1 }}>
                <div
                  onClick={() => this.toggleModal('defaultModal')}
                  style={{
                    ...style_list.card.detailsImageContainer,
                    borderRadius: '50%',
                  }}
                >
                  {this.props.speaker.fields &&
                    this.props.speaker.fields['Speaker Photo'] &&
                    this.props.speaker.fields['Speaker Photo'][0] && (
                      <img
                        style={{
                          objectFit: 'cover',
                          width: '122px',
                          height: '122px',
                        }}
                        src={this.props.speaker.fields['Speaker Photo'][0].url}
                        alt="img"
                      />
                    )}
                </div>
                <div style={style_list.card.detailsTitle}>
                  {this.props.speaker.fields.Name}
                </div>
                <p
                  style={{
                    fontSize: '13px',
                    width: '100%',
                    textAlign: 'center',
                    height: '49px',
                    maxHeight: '49px',
                    overflow: 'scroll',
                    fontFamily: 'cabin',
                    color: '#11111150',
                  }}
                >
                  {this.props.speaker.fields.Title}
                  {' at '} {this.props.speaker.fields.Organization}
                </p>
                <hr style={{ marginTop: '-12px' }} />
                <Button
                  block
                  outline
                  color="primary"
                  size="sm"
                  onClick={() => this.toggleModal('defaultModal')}
                  style={style_list.card.learnMoreButton}
                >
                  Learn More
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Modal
          className="modal-dialog-centered"
          size="lg"
          isOpen={this.state.defaultModal}
          toggle={() => this.toggleModal('defaultModal')}
        >
          <button
            aria-label="Close"
            style={{ backgroundColor: 'white' }}
            className="close m-2 "
            data-dismiss="modal"
            type="button"
            onClick={() => this.toggleModal('defaultModal')}
          >
            <span aria-hidden={true}>×</span>
          </button>
          <ModalBody
            style={{
              backgroundColor: '#d6f3f3',
              boxShadow: '0 2px 4px #11111150',
              borderTop: '1px solid #11111150',
              borderRadius: '0 0 5px 5px',
            }}
          >
            <Row>
              <Col lg={1}></Col>
              <Col lg={5}>
                <div
                  style={{
                    ...style_list.modal.imageContainer,
                    borderRadius: '50%',
                  }}
                >
                  {this.props.speaker.fields &&
                    this.props.speaker.fields['Speaker Photo'] &&
                    this.props.speaker.fields['Speaker Photo'][0] && (
                      <img
                        style={{
                          objectFit: 'cover',
                          width: '147px',
                          height: '147px',
                        }}
                        src={this.props.speaker.fields['Speaker Photo'][0].url}
                        alt="img"
                      />
                    )}
                </div>
                <div
                  style={{
                    color: '#111111d0',
                    fontFamily: 'cabin',
                    fontWeight: 'bold',
                  }}
                  className="mt-4 display-4"
                >
                  {' '}
                  {this.props.speaker.fields.Name}
                </div>
                <p style={{ color: '#11111150', fontFamily: 'cabin' }}>
                  {this.props.speaker.fields.Title}
                  {' at '} {this.props.speaker.fields.Organization}
                </p>
              </Col>
              <Col lg={6} className="text-left p-5">
                <ul
                  style={{
                    listStyleType: 'none',
                    color: '#111111d0',
                    fontFamily: 'cabin',
                    marginTop: -10,
                  }}
                >
                  <li className="mb-2">
                    <i
                      style={{ cursor: 'pointer' }}
                      className="ni ni-email-83 mr-2"
                    />

                    {this.props.speaker.fields.Email}
                  </li>
                  <li className="mb-2">
                    <i
                      style={{ cursor: 'pointer' }}
                      className="ni ni-mobile-button mr-2"
                    />
                    {this.props.speaker.fields['Phone Number']}
                  </li>
                  <li className="mb-2">
                    <i
                      style={{ cursor: 'pointer' }}
                      className="ni ni-laptop mr-2"
                    />

                    {this.props.speaker.fields['Website']}
                  </li>
                </ul>
              </Col>
            </Row>
            <hr style={{ marginTop: -10 }} />
            <Row>
              <Col lg={{ size: 10, offset: 1 }}>
                <p
                  style={{
                    marginTop: -10,
                    color: '#111111d0',
                    fontFamily: 'lato',
                  }}
                  className="font-weight-light mt-2"
                >
                  {this.props.speaker.fields['Speaker Bio']}
                </p>
                {/*</Row>*/}
              </Col>
            </Row>
            <hr />
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default connect(mapStoreToProps)(SpeakerList);
