import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import profilePic from '.././MemberItem/profilePic.jpg';

import '.././MemberItem/MemberItem.css';
import {
  Badge,
  Card,
  CardBody,
  Modal,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  CustomInput,
  Button,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Col,
  Row,
} from 'reactstrap';

import function_list from '../../functions/list'; // custom functions object
import style_list from '../../styles/list'; // custom styles object

class AdminMemberItem extends Component {
  state = {
    defaultModal: false,
    isOpen: false,
    isFavorite: false,
    editMember: {
      about: {
        email: this.props.member.email,
        first_name: this.props.member.first_name,
        last_name: this.props.member.last_name,
        access_level: this.props.member.access_level,
        display_name: this.props.member.display_name,
        community_role: this.props.member.community_role,
        organization_name: this.props.member.organization_name,
        mentor: this.props.member.mentor,
        mentee: this.props.member.mentee,
        job_title: this.props.member.job_title,
        address: this.props.member.address,
        city: this.props.member.city,
        state: this.props.member.state,
        zip_code: this.props.member.zip_code,
        linkedin: this.props.member.linkedin,
        facebook: this.props.member.facebook,
        twitter: this.props.member.twitter,
        instagram: this.props.member.instagram,
        headshot: this.props.member.headshot,
        bio: this.props.member.bio,
        user_id: this.props.member.user_id,
      },
      member_level: this.props.member.member_level,
    },
  };

  componentDidMount() {
    console.log(this.props);
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
      defaultModal: !this.state.defaultModal,
      isOpen: !this.state.isOpen,
    });
  };

  handleListingClick = (event) => {
    this.props.dispatch({
      type: 'SET_LISTING_CLICKED',
      payload: this.props.member,
    });
    console.log(this.props.member);
    this.setState({
      editMember: {
        about: {
          email: this.props.member.email,
          first_name: this.props.member.first_name,
          last_name: this.props.member.last_name,
          access_level: this.props.member.access_level,
          display_name: this.props.member.display_name,
          community_role: this.props.member.community_role,
          organization_name: this.props.member.organization_name,
          mentor: this.props.member.mentor,
          mentee: this.props.member.mentee,
          job_title: this.props.member.job_title,
          address: this.props.member.address,
          city: this.props.member.city,
          state: this.props.member.state,
          zip_code: this.props.member.zip_code,
          linkedin: this.props.member.linkedin,
          facebook: this.props.member.facebook,
          twitter: this.props.member.twitter,
          instagram: this.props.member.instagram,
          headshot: this.props.member.headshot,
          bio: this.props.member.bio,
          user_id: this.props.member.user_id,
        },
        member_level: this.props.member.member_level,
      },
    });
    this.toggleModal('defaultModal');
  };

  handleMemberEdit = (event, propertyKey) => {
    this.setState({
      editMember: {
        about: {
          ...this.state.editMember.about,
          [propertyKey]: event.target.value,
        },
        member_level: this.state.editMember.member_level,
      },
    });
    console.log(this.state);
  };

  handleMentorRadioTrue = (event) => {
    this.setState({
      editMember: {
        about: {
          ...this.state.editMember.about,
          mentor: true,
        },
        member_level: this.state.editMember.member_level,
      },
    });
  };
  handleMentorRadioFalse = (event) => {
    this.setState({
      editMember: {
        about: {
          ...this.state.editMember.about,
          mentor: false,
        },
        member_level: this.state.editMember.member_level,
      },
    });
  };
  handleMenteeRadioTrue = (event) => {
    this.setState({
      editMember: {
        about: {
          ...this.state.editMember.about,
          mentee: true,
        },
        member_level: this.state.editMember.member_level,
      },
    });
  };
  handleMenteeRadioFalse = (event) => {
    this.setState({
      editMember: {
        about: {
          ...this.state.editMember.about,
          mentee: false,
        },
        member_level: this.state.editMember.member_level,
      },
    });
  };
  handleAccessMember = (event) => {
    this.setState({
      editMember: {
        about: {
          ...this.state.editMember.about,
          access_level: 1,
        },
        member_level: this.state.editMember.member_level,
      },
    });
  };
  handleMemberLevel1 = (event) => {
    this.setState({
      editMember: {
        about: {
          ...this.state.editMember.about,
        },
        member_level: 1,
      },
    });
    console.log(this.state);
  };
  handleMemberLevel2 = (event) => {
    this.setState({
      editMember: {
        about: {
          ...this.state.editMember.about,
        },
        member_level: 2,
      },
    });
    console.log(this.state);
  };
  handleMemberLevel3 = (event) => {
    this.setState({
      editMember: {
        about: {
          ...this.state.editMember.about,
        },
        member_level: 3,
      },
    });
    console.log(this.state);
  };

  handleAccessAdmin = (event) => {
    this.setState({
      editMember: {
        about: {
          ...this.state.editMember.about,
          access_level: 2,
        },
        member_level: this.state.editMember.member_level,
      },
    });
  };

  handleModalSave = (event) => {
    this.props.dispatch({
      type: 'UPDATE_PROFILE_ADMIN',
      payload: {
        profile: this.state.editMember.about,
        member_level: this.state.editMember.member_level,
        id: this.state.editMember.about.user_id,
      },
    });
    console.log(this.state);
    this.setState({
      defaultModal: false,
      isOpen: false,
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
    const mentor = member.mentor;
    const mentee = member.mentee;
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
        <Button
          block
          outline
          color="primary"
          size="sm"
          onClick={this.handleListingClick}
          style={{
            ...style_list.card.learnMoreButton,
            border: '1px solid #f7fafc',
            padding: '3%',
          }}
        >
          <p style={{ marginTop: '-3.5%', fontWeight: 'bold' }}>Edit</p>
        </Button>

        <Modal
          className="modal-dialog-centered"
          size="lg"
          isOpen={this.state.isOpen}
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
            {' '}
            Edit Member Profile:
            <Row>
              <Col
                style={{ marginLeft: 35 }}
                lg={{ size: 5, offset: 1 }}
                md={{ size: 5, offset: 1 }}
              >
                <div
                  style={{
                    color: '#111111d0',
                    fontFamily: 'cabin',
                    fontWeight: 'bold',
                  }}
                  className="mt-4 display-4"
                >
                  {' '}
                  <Label
                    style={{
                      fontFamily: 'Cabin',
                      color: '#111111d0',
                    }}
                    htmlFor="display_name"
                    className="form-control-label"
                  >
                    Email:
                  </Label>
                  <Input
                    id="Email"
                    type="text"
                    placeholder="email"
                    onChange={(event) => this.handleMemberEdit(event, 'email')}
                    value={this.state.editMember.about.email}
                  />
                  <Label
                    style={{
                      fontFamily: 'Cabin',
                      color: '#111111d0',
                    }}
                    htmlFor="first_name"
                    className="form-control-label"
                  >
                    First Name
                  </Label>
                  <Input
                    id="First Name"
                    type="text"
                    placeholder="First Name"
                    onChange={(event) =>
                      this.handleMemberEdit(event, 'first_name')
                    }
                    value={this.state.editMember.about.first_name}
                  />
                  <Label
                    style={{
                      fontFamily: 'Cabin',
                      color: '#111111d0',
                    }}
                    htmlFor="first_name"
                    className="form-control-label"
                  >
                    Last Name
                  </Label>
                  <Input
                    id="Last Name"
                    type="text"
                    placeholder="Last Name"
                    onChange={(event) =>
                      this.handleMemberEdit(event, 'last_name')
                    }
                    value={this.state.editMember.about.last_name}
                  />
                  <Label
                    style={{
                      fontFamily: 'Cabin',
                      color: '#111111d0',
                      marginTop: -20,
                    }}
                    htmlFor="first_name"
                    className="form-control-label"
                  >
                    Display Name
                  </Label>
                  <Input
                    id="Display Name"
                    type="text"
                    placeholder="Community Role"
                    onChange={(event) =>
                      this.handleMemberEdit(event, 'display_name')
                    }
                    value={this.state.editMember.about.display_name}
                  />
                  <Label
                    style={{
                      fontFamily: 'Cabin',
                      color: '#111111d0',
                    }}
                    htmlFor="first_name"
                    className="form-control-label"
                  >
                    Community Role
                  </Label>
                  <Input
                    id="Community "
                    type="text"
                    placeholder="Community Role"
                    onChange={(event) =>
                      this.handleMemberEdit(event, 'community_role')
                    }
                    value={this.state.editMember.about.community_role}
                  />
                  <Label
                    style={{
                      fontFamily: 'Cabin',
                      color: '#111111d0',
                    }}
                    htmlFor="first_name"
                    className="form-control-label"
                  >
                    Job Title
                  </Label>
                  <Input
                    id="Email"
                    type="text"
                    placeholder="Photographer"
                    onChange={(event) =>
                      this.handleMemberEdit(event, 'job_title')
                    }
                    value={this.state.editMember.about.job_title}
                  />
                  <Label
                    style={{
                      fontFamily: 'Cabin',
                      color: '#111111d0',
                    }}
                    htmlFor="first_name"
                    className="form-control-label"
                  >
                    Organization Name
                  </Label>
                  <Input
                    id="Email"
                    type="text"
                    placeholder="Photographer"
                    onChange={(event) =>
                      this.handleMemberEdit(event, 'organization_name')
                    }
                    value={this.state.editMember.about.organization_name}
                  />
                  <Label
                    style={{
                      fontFamily: 'Cabin',
                      color: '#111111d0',
                    }}
                    htmlFor="Zip"
                    className="form-control-label"
                  >
                    Bio
                  </Label>
                  <Input
                    id="Email"
                    type="textarea"
                    placeholder="Street Address"
                    onChange={(event) => this.handleMemberEdit(event, 'bio')}
                    value={this.state.editMember.about.bio}
                  />
                </div>
              </Col>
              <Col lg={6} className="text-left p-5">
                <p
                  className="lead mb-0"
                  style={{
                    fontFamily: 'Cabin',
                    color: '#111111d0',
                    fontSize: 14,
                  }}
                >
                  Skills:
                </p>
                <div
                  style={{
                    height: '90px',
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
                <FormGroup>
                  <Label for="mentorRadio">
                    <p
                      style={{
                        fontFamily: 'Cabin',
                        color: '#111111d0',
                        fontSize: 14,
                        marginRight: 10,
                      }}
                    >
                      Mentor:
                    </p>
                  </Label>
                  <div className="form-check-inline">
                    <CustomInput
                      className="form-check-input"
                      type="radio"
                      id="mentorTrueRadio"
                      name="mentorRadio"
                      label="True"
                      onChange={this.handleMentorRadioTrue}
                      checked={this.state.editMember.about.mentor}
                    />
                    <CustomInput
                      className="form-check-input"
                      type="radio"
                      id="mentorFalseRadio"
                      name="mentorRadio"
                      label="False"
                      onChange={this.handleMentorRadioFalse}
                      checked={!this.state.editMember.about.mentor}
                    />
                  </div>
                </FormGroup>
                <FormGroup>
                  <Label for="menteeRadio">
                    <p
                      style={{
                        fontFamily: 'Cabin',
                        color: '#111111d0',
                        fontSize: 14,
                        marginRight: 10,
                      }}
                    >
                      Mentee:
                    </p>
                  </Label>
                  <div className="form-check-inline">
                    <CustomInput
                      className="form-check-input"
                      type="radio"
                      color="secondary"
                      id="menteeTrueRadio"
                      name="menteeRadio"
                      label="True"
                      onChange={this.handleMenteeRadioTrue}
                      checked={this.state.editMember.about.mentee}
                    />
                    <CustomInput
                      className="form-check-input"
                      type="radio"
                      color="secondary"
                      id="menteeFalseRadio"
                      name="menteeRadio"
                      label="False"
                      onChange={this.handleMenteeRadioFalse}
                      checked={!this.state.editMember.about.mentee}
                    />
                  </div>
                </FormGroup>
                <Label
                  style={{
                    fontFamily: 'Cabin',
                    color: '#111111d0',
                  }}
                  htmlFor="first_name"
                  className="form-control-label"
                >
                  Street Address
                </Label>
                <Input
                  id="Email"
                  type="text"
                  placeholder="Street Address"
                  onChange={(event) => this.handleMemberEdit(event, 'address')}
                  value={this.state.editMember.about.address}
                />
                <Label
                  style={{
                    fontFamily: 'Cabin',
                    color: '#111111d0',
                  }}
                  htmlFor="first_name"
                  className="form-control-label"
                >
                  City
                </Label>
                <Input
                  id="City"
                  type="text"
                  placeholder="Street Address"
                  onChange={(event) => this.handleMemberEdit(event, 'city')}
                  value={this.state.editMember.about.city}
                />
                <Label
                  style={{
                    fontFamily: 'Cabin',
                    color: '#111111d0',
                  }}
                  htmlFor="Zip"
                  className="form-control-label"
                >
                  State
                </Label>
                <Input
                  id="State"
                  type="text"
                  placeholder="Street Address"
                  onChange={(event) => this.handleMemberEdit(event, 'state')}
                  value={this.state.editMember.about.state}
                />
                <Label
                  style={{
                    fontFamily: 'Cabin',
                    color: '#111111d0',
                  }}
                  htmlFor="Zip"
                  className="form-control-label"
                >
                  Zip
                </Label>
                <Input
                  id="Zip"
                  type="number"
                  placeholder="Street Address"
                  onChange={(event) => this.handleMemberEdit(event, 'zip_code')}
                  value={this.state.editMember.about.zip_code}
                />
                <FormGroup className="form-check-inline">
                  <Label for="menteeRadio">
                    {' '}
                    <p
                      style={{
                        fontFamily: 'Cabin',
                        color: '#111111d0',
                        fontSize: 14,
                        marginTop: 20,
                        marginRight: 10,
                      }}
                    >
                      Access Level
                    </p>
                  </Label>

                  {/* <div
                      style={{
                        fontFamily: 'cabin',
                        fortSize: 15,
                        marginTop: '-20px',
                      }}
                    > */}
                  <CustomInput
                    className="form-check-input"
                    type="radio"
                    id="accessMemberRadio"
                    name="accessRadio"
                    label="Member"
                    onChange={this.handleAccessMember}
                    checked={this.state.editMember.about.access_level === 1}
                  />
                  <CustomInput
                    className="form-check-input"
                    type="radio"
                    id="accessAdminRadio"
                    name="accessRadio"
                    label="Admin"
                    onChange={this.handleAccessAdmin}
                    checked={this.state.editMember.about.access_level === 2}
                  />
                  {/* </div> */}
                </FormGroup>
                <FormGroup className="form-check-inline">
                  <Label for="memberLevelRadio">
                    {' '}
                    <p
                      style={{
                        fontFamily: 'Cabin',
                        color: '#111111d0',
                        fontSize: 14,
                        marginTop: 20,
                        marginRight: 10,
                      }}
                    >
                      Member Level
                    </p>
                  </Label>

                  {/* <div
                      style={{
                        fontFamily: 'cabin',
                        fortSize: 15,
                        marginTop: '-20px',
                      }}
                    > */}
                  <CustomInput
                    className="form-check-input"
                    type="radio"
                    id="memberLevelOneRadio"
                    name="memberRadio"
                    label="1"
                    onChange={this.handleMemberLevel1}
                    checked={this.state.editMember.member_level === 1}
                  />
                  <CustomInput
                    className="form-check-input"
                    type="radio"
                    id="memberLevelTwoRadio"
                    name="memberRadio"
                    label="2"
                    onChange={this.handleMemberLevel2}
                    checked={this.state.editMember.member_level === 2}
                  />
                  <CustomInput
                    className="form-check-input"
                    type="radio"
                    id="memberLevelThreeRadio"
                    name="memberRadio"
                    label="3"
                    onChange={this.handleMemberLevel3}
                    checked={this.state.editMember.member_level === 3}
                  />
                  {/* </div> */}
                </FormGroup>
              </Col>
            </Row>
            <hr style={{ marginTop: 15 }} />
            <Row style={{ marginTop: 15 }}>
              <Col style={{ marginTop: -32 }}>
                <div
                  style={{
                    color: '#111111d0',
                    fontFamily: 'cabin',
                    fontWeight: 'bold',
                  }}
                  className="mt-4 display-4"
                >
                  {' '}
                  <Label
                    style={{
                      fontFamily: 'Cabin',
                      color: '#111111d0',
                    }}
                    htmlFor="display_name"
                    className="form-control-label"
                  >
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
                  </Label>
                  <Input
                    type="text"
                    onChange={(event) =>
                      this.handleMemberEdit(event, 'instagram')
                    }
                    value={this.state.editMember.about.instagram}
                  />
                  <Label
                    style={{
                      fontFamily: 'Cabin',
                      color: '#111111d0',
                    }}
                    htmlFor="display_name"
                    className="form-control-label"
                  >
                    <i
                      className="fa fa-facebook-official"
                      style={{
                        marginTop: -2,
                        fontSize: '35px',
                        color: '#4267B2',
                        verticalAlign: 'middle',
                      }}
                    />
                  </Label>
                  <Input
                    style={{ marginTop: -2 }}
                    id="facebook"
                    type="text"
                    onChange={(event) =>
                      this.handleMemberEdit(event, 'facebook')
                    }
                    value={this.state.editMember.about.facebook}
                  />
                </div>
              </Col>
              <Col>
                <Label
                  style={{
                    fontFamily: 'Cabin',
                    color: '#111111d0',
                  }}
                  htmlFor="display_name"
                  className="form-control-label"
                >
                  <i
                    className="fa fa-linkedin-square"
                    style={{
                      fontSize: '35px',
                      color: '#2867B2',
                      verticalAlign: 'middle',
                    }}
                  />
                </Label>

                <Input
                  id="Email"
                  type="text"
                  onChange={(event) => this.handleMemberEdit(event, 'linkedin')}
                  value={this.state.editMember.about.linkedin}
                />
                <Label
                  style={{
                    fontFamily: 'Cabin',
                    color: '#111111d0',
                  }}
                  htmlFor="display_name"
                  className="form-control-label"
                >
                  <i
                    className="fa fa-twitter-square"
                    style={{
                      fontSize: '35px',
                      color: '#1DA1F2',
                      verticalAlign: 'middle',
                    }}
                  />
                </Label>

                <Input
                  id="Email"
                  type="text"
                  onChange={(event) => this.handleMemberEdit(event, 'twitter')}
                />
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button
              style={{
                backgroundColor: '#17c3ca',
                border: '1px solid white',
                color: '#f7fafc',
                boxShadow: '0 2px 4px #11111150',
                marginTop: -15,
                float: 'right',
              }}
              outline
              color="primary"
              onClick={this.handleModalSave}
            >
              Save
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default connect(mapStoreToProps)(AdminMemberItem);
