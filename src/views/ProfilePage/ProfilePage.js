import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import _ from 'lodash';
import LogOutButton from '../../components/LogOutButton/LogOutButton';
import MemberPersonalityForm from '../../components/MemberPersonalityForm/MemberPersonalityForm';
import MentorSurveyForm from '../../components/MemberMentorSurvey/MemberMentorSurvey';
import IndustryModal from '../../components/IndustryModal/IndustryModalButton';

import './ProfilePage.css';
import function_list from '../../functions/list';
import style_list from '../../styles/list';

import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  Modal,
  ModalBody,
  Input,
  CardText,
  Label,
  CardHeader,
  Badge,
} from 'reactstrap';
import ImageUpload from '../../services/ImageUpload/ImageUpload';
import CareerModal from '../../components/CareerModal/CareerModal';
import SelectedIndustryButton from '../../components/IndustryModal/SelectedIndustryButton';
import MemberPersonalityModal from '../../components/MemberPersonalityForm/MemberPersonalityModal';
// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class ProfilePage extends Component {
  state = {
    profile: {},
    update: false,
    picEdit: false,
    defaultModal: false,
    defaultModal2: false,
    isOpen: false,
  };

  componentDidMount() {
    this.setState({
      profile: this.props.store.profile,
      update: false,
    });
    this.props.dispatch({
      type: 'GET_INDUSTRIES',
    });
    this.props.dispatch({
      type: 'GET_CAREER_LEVELS',
    });
    this.props.dispatch({
      type: 'GET_PERSONALITY',
      payload: this.props.store.user.id,
    });
  }

  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };

  handleChange = (key) => (event) => {
    this.setState({
      profile: {
        ...this.state.profile,
        [key]: event.target.value,
      },
    });
  };

  updateProfile = () => {
    this.props.dispatch({
      type: 'UPDATE_PROFILE',
      payload: { profile: this.state.profile, id: this.props.store.user.id },
    });
  };

  switchPic = () => {
    this.setState({
      picEdit: !this.state.picEdit,
    });
  };

  updatePic = () => {
    this.props.dispatch({
      type: 'UPDATE_USER_HEADSHOT',
      payload: {
        headshot: this.props.store.imageUrlReducer.avatarPath,
        id: this.props.store.user.id,
      },
    });
    this.props.history.push('/main');
  };

  render() {
    // const htmlArray = this.props.store.userCareerLevel.map((item, index) => {
    //   return <h2 key={index} item={item.name} />;
    // });

    let career = <CareerModal />;
    if (
      this.props.store.userCareerLevel.name != '' &&
      this.props.store.userCareerLevel.name != null
    ) {
      career = (
        <Input
          id="display_name"
          type="text"
          placeholder={this.props.store.userCareerLevel.name}
        />
      );
    }
    let personality = <MemberPersonalityModal />;
    if (
      this.props.store.personality.id != '' &&
      this.props.store.personality.id != null
    ) {
      personality = null;
    }

    const profilePic = require('./profilePic.jpg');

    let image = (
      <img
        src={profilePic}
        alt="profile headshot"
        style={{
          objectFit: 'cover',
          width: '150px',
          height: '150px',
          borderRadius: '100%',
          border: '3px solid white',
        }}
        className="profile-pic card-profile-image mb-2"
      />
    );
    if (
      this.props.store.profile.headshot != '' &&
      this.props.store.profile.headshot != null
    ) {
      image = (
        <img
          style={{
            objectFit: 'cover',
            width: '150px',
            height: '150px',
            borderRadius: '100%',
            border: '3px solid white',
          }}
          className="profile-pic card-profile-image mb-2"
          src={this.props.store.profile.headshot}
          alt="alternative"
        />
      );
    }
    return (
      <Container>
        {this.props && this.props.store && this.props.store.profile && (
          <Container fluid className="mt-5">
            <Row>
              <Col
                lg={{ size: 8, order: '2' }}
                sm={{ size: 12, order: '2' }}
                xs={{ size: 12, order: '2' }}
              >
                <Card
                  style={{
                    boxShadow: '0 2px 4px #11111150',
                    borderRadius: '5px',
                    padding: '0px',
                    backgroundColor: '#d6f3f3',
                  }}
                  className="details-card"
                >
                  <CardHeader
                    style={{
                      boxShadow: '0 2px 4px #11111150',
                      borderRadius: '5px 5px 0px 0px',
                      height: '60px',
                      margin: '-1px -1px 0 -1px',
                    }}
                    className="bg-white"
                  >
                    <h2 style={{ marginTop: -5, fontFamily: 'cabin' }}>
                      My Profile:
                    </h2>{' '}
                    {_.isEqual(this.state.profile, this.props.store.profile) ? (
                      ''
                    ) : (
                      <Button
                        style={{
                          backgroundColor: '#17c3ca',
                          border: '1px solid white',
                          color: '#f7fafc',
                          boxShadow: '0 2px 4px #11111150',
                          marginTop: -45,
                          float: 'right',
                        }}
                        outline
                        color="primary"
                        onClick={this.updateProfile}
                      >
                        Save Profile
                      </Button>
                    )}
                  </CardHeader>
                  <CardBody>
                    <CardText
                      style={{
                        fontFamily: 'Lato',
                        color: '#111111d0',
                      }}
                    >
                      ACCOUNT INFORMATION
                    </CardText>
                    <Row>
                      <Col lg={6}>
                        <Label
                          style={{
                            fontFamily: 'Cabin',
                            color: '#111111d0',
                          }}
                          htmlFor="display_name"
                          className="form-control-label"
                        >
                          Display Name:
                        </Label>
                        <Input
                          id="display_name"
                          type="text"
                          placeholder={this.props.store.profile.display_name}
                          onChange={this.handleChange('display_name')}
                          value={this.state.profile.display_name}
                        />
                      </Col>
                      <Col lg={6}>
                        <Label
                          style={{
                            fontFamily: 'Cabin',
                            color: '#111111d0',
                          }}
                          htmlFor="email"
                          className="form-control-label"
                        >
                          Email:
                        </Label>
                        <Input
                          type="text"
                          id="email"
                          placeholder={this.props.store.profile.email}
                          onChange={this.handleChange('email')}
                          value={this.state.profile.email}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        <Label
                          style={{
                            fontFamily: 'Cabin',
                            color: '#111111d0',
                          }}
                          htmlFor="fname"
                          className="form-control-label"
                        >
                          First Name:
                        </Label>
                        <Input
                          type="text"
                          id="fname"
                          placeholder={this.props.store.profile.first_name}
                          onChange={this.handleChange('first_name')}
                          value={this.state.profile.first_name}
                        />
                      </Col>
                      <Col lg={6}>
                        <Label
                          style={{
                            fontFamily: 'Cabin',
                            color: '#111111d0',
                          }}
                          htmlFor="last_name"
                          className="form-control-label"
                        >
                          Last Name:
                        </Label>
                        <Input
                          id="last_name"
                          type="text"
                          placeholder={this.props.store.profile.last_name}
                          onChange={this.handleChange('last_name')}
                          value={this.state.profile.last_name}
                        />
                      </Col>
                    </Row>
                    <hr />
                    <CardText
                      style={{
                        fontFamily: 'Lato',
                        color: '#111111d0',
                      }}
                    >
                      PERSONAL INFORMATION
                    </CardText>
                    <Row>
                      <Col lg={12}>
                        <Label
                          style={{
                            fontFamily: 'Cabin',
                            color: '#111111d0',
                          }}
                          htmlFor="address"
                          className="form-control-label"
                        >
                          Street Address:
                        </Label>
                        <Input
                          type="text"
                          id="address"
                          placeholder={this.props.store.profile.address}
                          onChange={this.handleChange('address')}
                          value={this.state.profile.address}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={4}>
                        <Label
                          style={{
                            fontFamily: 'Cabin',
                            color: '#111111d0',
                          }}
                          htmlFor="city"
                          className="form-control-label"
                        >
                          City:
                        </Label>
                        <Input
                          id="city"
                          type="text"
                          placeholder={this.props.store.profile.city}
                          onChange={this.handleChange('city')}
                          value={this.state.profile.city}
                        />
                      </Col>

                      <Col lg={4}>
                        <Label
                          style={{
                            fontFamily: 'Cabin',
                            color: '#111111d0',
                          }}
                          htmlFor="state"
                          className="form-control-label"
                        >
                          State:
                        </Label>
                        <Input
                          type="text"
                          id="state"
                          placeholder={this.props.store.profile.state}
                          onChange={this.handleChange('state')}
                          value={this.state.profile.state}
                        />
                      </Col>
                      <Col lg={4}>
                        <Label
                          style={{
                            fontFamily: 'Cabin',
                            color: '#111111d0',
                          }}
                          htmlFor="zip_code"
                          className="form-control-label"
                        >
                          Zipcode:
                        </Label>
                        <Input
                          type="text"
                          id="zip_code"
                          placeholder={this.props.store.profile.zip_code}
                          onChange={this.handleChange('zip_code')}
                          value={this.state.profile.zip_code}
                        />
                      </Col>
                    </Row>
                    <hr />
                    <CardText
                      style={{
                        fontFamily: 'Lato',
                        color: '#111111d0',
                      }}
                    >
                      PROFESSIONAL INFORMATION
                    </CardText>
                    <Row>
                      <Col lg={6}>
                        <Label
                          style={{
                            fontFamily: 'Cabin',
                            color: '#111111d0',
                          }}
                          htmlFor="bio"
                          className="form-control-label"
                        >
                          Bio:
                        </Label>
                        <Input
                          id="bio"
                          type="text"
                          placeholder={this.props.store.profile.bio}
                          onChange={this.handleChange('bio')}
                          value={this.state.profile.bio}
                        />
                      </Col>
                      <Col lg={6}>
                        <Label
                          style={{
                            fontFamily: 'Cabin',
                            color: '#111111d0',
                          }}
                          htmlFor="community_role"
                          className="form-control-label"
                        >
                          Community Role:
                        </Label>
                        <Input
                          id="community_role"
                          type="text"
                          placeholder={this.props.store.profile.community_role}
                          onChange={this.handleChange('community_role')}
                          value={this.state.profile.community_role}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        <Label
                          style={{
                            fontFamily: 'Cabin',
                            color: '#111111d0',
                          }}
                          htmlFor="organization_name"
                          className="form-control-label"
                        >
                          Organization:
                        </Label>
                        <Input
                          id="organization_name"
                          type="text"
                          placeholder={
                            this.props.store.profile.organization_name
                          }
                          onChange={this.handleChange('organization_name')}
                          value={this.state.profile.organization_name}
                        />
                      </Col>
                      <Col lg={6}>
                        <Label
                          style={{
                            fontFamily: 'Cabin',
                            color: '#111111d0',
                          }}
                          htmlFor="job_title"
                          className="form-control-label"
                        >
                          Job Title:
                        </Label>
                        <Input
                          type="text"
                          id="job_title"
                          placeholder={this.props.store.profile.job_title}
                          onChange={this.handleChange('job_title')}
                          value={this.state.profile.job_title}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        <Label
                          style={{
                            fontFamily: 'Cabin',
                            color: '#111111d0',
                          }}
                          htmlFor="organization_name"
                          className="form-control-label"
                        >
                          Industry:
                        </Label>
                        <SelectedIndustryButton />
                      </Col>
                      <Col lg={6}>
                        <Label
                          style={{
                            fontFamily: 'Cabin',
                            color: '#111111d0',
                          }}
                          htmlFor="job_title"
                          className="form-control-label"
                        >
                          Career Level:
                        </Label>
                        {career}
                      </Col>
                    </Row>
                    <hr />
                    <CardText
                      style={{
                        fontFamily: 'Lato',
                        color: '#111111d0',
                      }}
                    >
                      SOCIAL MEDIA
                    </CardText>
                    <Row>
                      <Col lg={6}>
                        <Label
                          style={{
                            fontFamily: 'Cabin',
                            color: '#111111d0',
                          }}
                          htmlFor="linkedin"
                          className="form-control-label"
                        >
                          LinkedIn:
                        </Label>
                        <Input
                          id="linkedin"
                          type="text"
                          placeholder={this.props.store.profile.linkedin}
                          onChange={this.handleChange('linkedin')}
                          value={this.state.profile.linkedin}
                        />
                      </Col>
                      <Col lg={6}>
                        <Label
                          style={{
                            fontFamily: 'Cabin',
                            color: '#111111d0',
                          }}
                          htmlFor="facebook"
                          className="form-control-label"
                        >
                          Facebook:
                        </Label>
                        <Input
                          id="facebook"
                          type="text"
                          placeholder={this.props.store.profile.facebook}
                          onChange={this.handleChange('facebook')}
                          value={this.state.profile.facebook}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        <Label
                          style={{
                            fontFamily: 'Cabin',
                            color: '#111111d0',
                          }}
                          htmlFor="twitter"
                          className="form-control-label"
                        >
                          Twitter:
                        </Label>
                        <Input
                          type="text"
                          id="twitter"
                          placeholder={this.props.store.profile.twitter}
                          onChange={this.handleChange('twitter')}
                          value={this.state.profile.twitter}
                        />
                      </Col>
                      <Col lg={6}>
                        <Label
                          style={{
                            fontFamily: 'Cabin',
                            color: '#111111d0',
                          }}
                          htmlFor="instagram"
                          className="form-control-label"
                        >
                          Instagram:
                        </Label>
                        <Input
                          id="instagram"
                          type="text"
                          placeholder={this.props.store.profile.instagram}
                          onChange={this.handleChange('instagram')}
                          value={this.state.profile.instagram}
                        />
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col
                lg={{ size: 4, order: '1' }}
                sm={{ size: 12, order: '1' }}
                xs={{ size: 12, order: '1' }}
              >
                <Card
                  className="details-card"
                  style={{
                    boxShadow: '0 2px 4px #11111150',
                    borderRadius: '5px',
                    padding: '0px',
                    backgroundColor: '#d6f3f3',
                  }}
                >
                  <CardBody className="text-center">
                    {this.state.picEdit ? (
                      <Col lg={{ size: 5, offset: 3 }}>
                        <ImageUpload />
                        {this.props.store.imageUrlReducer.avatarPath ? (
                          <Button
                            style={{
                              backgroundColor: '#17c3ca',
                              border: '1px solid white',
                              color: '#f7fafc',
                              boxShadow: '0 2px 4px #11111150',
                              marginTop: -45,
                              float: 'right',
                            }}
                            size="sm"
                            onClick={this.updatePic}
                          >
                            Save Profile Picture
                          </Button>
                        ) : (
                          ''
                        )}
                      </Col>
                    ) : (
                      <>
                        <div
                          style={{
                            maxHeight: '150px',
                            maxWidth: '150px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            margin: 'auto',
                            boxShadow: '0 2px 4px #11111150',
                          }}
                        >
                          {/* <img
                            style={{
                              objectFit: 'cover',
                              width: '147px',
                              height: '147px',
                            }}
                            className="profile-pic card-profile-image mb-2"
                            src={this.props.store.profile.headshot}
                            alt="profile headshot"
                          /> */}
                          {image}
                        </div>
                      </>
                    )}
                    <h3>
                      <span
                        style={{
                          fontSize: '30px',
                          fontFamily: 'cabin',
                          color: '#111111d0',
                        }}
                      >
                        <b>{this.props.store.profile.display_name}</b>
                      </span>
                      <br></br>{' '}
                      <span
                        style={{
                          marginTop: '-20px',
                          fontSize: '20px',
                          fontFamily: 'lato',
                          color: '#111111d0',
                        }}
                        className="font-weight-light"
                      >
                        {this.props.store.profile.community_role}
                      </span>
                    </h3>
                    <p
                      style={{
                        marginTop: -10,
                        fontSize: '15px',
                        fontFamily: 'lato',
                        color: '#111111d0',
                      }}
                      className="lead"
                    >
                      <i>{this.props.store.profile.organization_name}</i>{' '}
                    </p>{' '}
                    <hr style={{ marginTop: '0px' }} />
                    <p
                      style={{
                        marginTop: -20,
                        fontSize: '20px',
                        fontFamily: 'lato',
                        color: '#111111d0',
                      }}
                    >
                      Skills/Areas of Interest
                    </p>
                    <Row>
                      <Col
                        lg={{ size: 10, offset: '1' }}
                        sm={{ size: 10, offset: '1' }}
                        xs={{ size: 10, offset: '1' }}
                      >
                        {this.props.store.profile &&
                          this.props.store.profile.skills &&
                          this.props.store.profile.skills.map((item, i) => {
                            let color;
                            switch (item.category_id) {
                              case 1:
                                color = 'primary';
                                break;
                              case 2:
                                color = 'info';
                                break;
                              case 3:
                                color = 'secondary';
                                break;
                              case 4:
                                color = 'success';
                                break;
                              case 5:
                                color = 'danger';
                                break;
                              case 6:
                                color = 'warning';
                                break;
                              case 7:
                                color = 'primary';
                                break;
                              case 8:
                                color = 'info';
                                break;
                              case 9:
                                color = 'secondary';
                                break;
                              case 10:
                                color = 'success';
                                break;
                              case 11:
                                color = 'danger';
                                break;
                              case 12:
                                color = 'warning';
                                break;
                              default:
                                color = 'primary';
                                break;
                            }
                            return (
                              <Badge
                                className="mr-1 mt-1"
                                key={i}
                                pill
                                color={color}
                              >
                                {item.skill}
                              </Badge>
                            );
                          })}
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col lg={{ size: 12 }}>
                        <a href={this.props.store.profile.instagram}>
                          <i
                            className="fa fa-instagram"
                            style={{
                              fontSize: '30px',
                              background:
                                'linear-gradient(220deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
                              WebkitTextFillColor: 'transparent',
                              WebkitBackgroundClip: 'text',
                              verticalAlign: 'middle',
                            }}
                          />
                        </a>{' '}
                        |{' '}
                        <a href={this.props.store.profile.facebook}>
                          <i
                            className="fa fa-facebook-official"
                            style={{
                              fontSize: '30px',
                              color: '#4267B2',
                              verticalAlign: 'middle',
                            }}
                          />
                        </a>{' '}
                        |{' '}
                        <a href={this.props.store.profile.linkedin}>
                          <i
                            className="fa fa-linkedin-square"
                            style={{
                              fontSize: '30px',
                              color: '#2867B2',
                              verticalAlign: 'middle',
                            }}
                          />
                        </a>{' '}
                        |{' '}
                        <a href={this.props.store.profile.twitter}>
                          <i
                            className="fa fa-twitter-square"
                            style={{
                              fontSize: '30px',
                              color: '#1DA1F2',
                              verticalAlign: 'middle',
                            }}
                          />
                        </a>
                      </Col>
                    </Row>
                    <Button
                      block
                      style={{
                        marginLeft: '5px',
                        marginTop: '15px',
                        backgroundColor: 'white',
                        boxShadow: '0 2px 4px #11111150',
                        border: '1px solid #AAA',
                        marginBottom: '10px',
                        height: 45,
                        fontFamily: 'cabin',
                        fontSize: 15,
                        color: '#11111150',
                      }}
                      size="sm"
                      className="profile-button"
                      onClick={this.switchPic}
                    >
                      Change Profile Picture
                    </Button>
                    {personality}
                    {/* <MemberPersonalityModal /> */}
                    <br />
                    <Row>
                      <Col className="text-center">
                        {/* <i className="ni ni-user-run" style={{ color: '#888' }} /> */}
                        <LogOutButton />
                      </Col>
                    </Row>
                    <br />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        )}
        <Modal
          className="modal-dialog-centered"
          size="lg"
          isOpen={this.state.defaultModal}
          toggle={() => this.toggleModal('defaultModal')}
        >
          <button
            aria-label="Close"
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
            <MemberPersonalityForm />
          </ModalBody>
        </Modal>
        <Modal
          className="modal-dialog-centered"
          size="lg"
          isOpen={this.state.defaultModal2}
          toggle={() => this.toggleModal('defaultModal2')}
        >
          <button
            aria-label="Close"
            className="close m-2 "
            data-dismiss="modal"
            type="button"
            onClick={() => this.toggleModal('defaultModal2')}
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
            <MentorSurveyForm />
          </ModalBody>
        </Modal>
      </Container>
    );
  }
}

export default connect(mapStoreToProps)(ProfilePage);
