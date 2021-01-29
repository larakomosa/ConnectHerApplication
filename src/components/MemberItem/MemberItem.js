import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import profilePic from './profilePic.jpg';

import './MemberItem.css';
import {
  Badge,
  Button,
  Col,
  Row,
  Card,
  CardBody,
  Modal,
  ModalBody,
} from 'reactstrap';
import ContactForm from '../ContactForm/ContactForm';

import function_list from '../../functions/list'; // custom functions object
import style_list from '../../styles/list'; // custom styles object

class MemberItem extends Component {
  state = { defaultModal: false, isOpen: false, isFavorite: false };

  componentDidMount() {
    if (
      function_list.checkFavorite({
        id: this.props.member.user_id,
        array: this.props.store.favorites.member,
      }) === true
    )
      this.setState({ ...this.state, isFavorite: true });
  }

  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };

  handleListingClick = () => {
    this.props.dispatch({
      type: 'SET_LISTING_CLICKED',
      payload: this.props.member,
    });
    this.toggleModal('defaultModal');
  };

  openMember = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  /*-----> CASTOR <-----*/
  toggleFavorite = () => {
    if (
      function_list.checkFavorite({
        id: this.props.member.user_id,
        array: this.props.store.favorites.member,
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
              favoriteId: `${this.props.member.user_id}`,
              favoriteType: 'member',
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
              favoriteId: `${this.props.member.user_id}`,
              favoriteType: 'member',
            },
          });
        }
      );
    }
  };

  /*-----> CASTOR <-----*/

  render() {
    const { member } = this.props;
    let favoriteIconColor = function_list.favoriteIconHandler(false);

    if (
      function_list.checkFavorite({
        id: this.props.member.user_id,
        array: this.props.store.favorites.member,
      }) === true
    ) {
      favoriteIconColor = function_list.favoriteIconHandler(true);
    }

    let image = (
      <img
        src={profilePic}
        alt="profile headshot"
        style={{
          objectFit: 'cover',
          width: '147px',
          height: '147px',
        }}
        className="profile-pic card-profile-image mb-2"
      />
    );
    if (member.headshot != '' && member.headshot != null) {
      image = (
        <img
          style={{
            objectFit: 'cover',
            width: '147px',
            height: '147px',
          }}
          className="profile-pic card-profile-image mb-2"
          src={member.headshot}
          alt="alternative"
        />
      );
    }

    return (
      <>
        <Card
          style={style_list.card.base}
          className="bg-secondary shadow ml-0 mr-0 mb-3"
        >
          <CardBody style={style_list.card.body}>
            <div style={style_list.card.gradientFade}>
              <div style={style_list.card.heart}>
                <i
                  class="fa fa-heart m-1 fa-heart-custom"
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
                  {image}
                </div>
                <div style={style_list.card.detailsTitle}>
                  {member.first_name} {member.last_name}
                </div>
                <p
                  style={{
                    fontSize: '14px',
                    width: '100%',
                    textAlign: 'center',
                    height: '49px',
                    maxHeight: '49px',
                    overflow: 'scroll',
                    color: '#111111d0',
                    fontFamily: 'lato',
                  }}
                >
                  {member.job_title} at {member.organization_name}
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
            style={{
              backgroundColor: 'white',
            }}
            aria-label="Close"
            className="close m-2 "
            data-dismiss="modal"
            type="button"
            onClick={() => this.toggleModal('defaultModal')}
          >
            <span style={{ backgroundColor: '' }} aria-hidden={true}>
              ×
            </span>
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
                  {function_list.detailsCardImage(member.headshot).modalTag}
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
                  {member.first_name} {member.last_name}
                </div>
                <p
                  style={{
                    color: '#11111150',
                    fontFamily: 'cabin',
                    fontWeight: 'bold',
                  }}
                >
                  {member.job_title} at {member.organization_name}
                </p>
                <ul
                  style={{
                    listStyleType: 'none',
                    color: '#111111d0',
                    fontFamily: 'cabin',
                  }}
                >
                  <li
                    className="mb-2"
                    style={{ fontFamily: 'cabin', color: '#111111d0' }}
                  >
                    <i
                      style={{
                        marginLeft: -40,
                      }}
                      className="ni ni-email-83 mr-2"
                    />
                    {member.email}
                  </li>
                </ul>
              </Col>
              <Col lg={6} className="text-left p-5">
                <h3
                  className="lead mb-0"
                  style={{
                    marginTop: -50,
                    color: '#111111d0',
                    fontFamily: 'cabin',
                  }}
                >
                  Skills:
                </h3>
                <div
                  style={{
                    marginTop: 0,
                    height: '100px',
                    overflow: 'scroll',
                  }}
                >
                  {member.skills.map((skill, i) => {
                    let color = function_list.mapSkillColors(skill.category_id);
                    return (
                      <Badge
                        className="mr-1 mt-1"
                        key={skill.id}
                        color={color}
                        pill
                      >
                        {skill.skill}
                      </Badge>
                    );
                  })}
                </div>
              </Col>
            </Row>
            <hr style={{ marginTop: -10 }} />
            <Row style={{ marginTop: -10 }}>
              <Col lg={{ size: 10, offset: 1 }}>
                <p
                  style={{
                    marginTop: -10,
                    color: '#111111d0',
                    fontFamily: 'cabin',
                  }}
                  className="lead mb-0"
                >
                  Bio:{' '}
                </p>{' '}
                <p
                  style={{
                    color: '#111111d0',
                    fontFamily: 'lato',
                  }}
                >
                  {member.bio}
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={member.instagram}
                  // target="_blank"
                >
                  {' '}
                  <i
                    className="fa fa-instagram"
                    style={{
                      fontSize: '35px',
                      background:
                        'linear-gradient(220deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
                      WebkitTextFillColor: 'transparent',
                      WebkitBackgroundClip: 'text',
                      verticalAlign: 'middle',
                    }}
                  />
                </a>{' '}
                |{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={member.facebook}
                >
                  <i
                    className="fa fa-facebook-official"
                    style={{
                      fontSize: '35px',
                      color: '#4267B2',
                      verticalAlign: 'middle',
                    }}
                  />
                </a>{' '}
                |{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={member.linkedin}
                >
                  <i
                    className="fa fa-linkedin-square"
                    style={{
                      fontSize: '35px',
                      color: '#2867B2',
                      verticalAlign: 'middle',
                    }}
                  />
                </a>{' '}
                |{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={member.twitter}
                >
                  <i
                    className="fa fa-twitter-square"
                    style={{
                      fontSize: '35px',
                      color: '#1DA1F2',
                      verticalAlign: 'middle',
                    }}
                  />
                </a>
              </Col>
            </Row>
            <hr />
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default connect(mapStoreToProps)(MemberItem);
