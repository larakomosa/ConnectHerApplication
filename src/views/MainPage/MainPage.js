import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

//import { useFormik } from 'formik';

import './MainPage.css';

//ReactStrap imports
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  Badge,
  Container,
  Row,
  Col,
  Button,
} from 'reactstrap';

import { Link } from 'react-router-dom';

class MainPage extends Component {
  componentDidMount() {
    document.title = 'ConnectHER';
  }

  state = {
    first_name: '',
    last_name: '',
    email: '',
    headshot: '',
    organization_name: '',
    skill: '',
  };

  handleSpeakers = (event) => {
    event.preventDefault();
    this.props.history.push('speakers');
  };
  handleCommunity = (event) => {
    event.preventDefault();
    this.props.history.push('/search');
  };
  handleBusinesses = (event) => {
    event.preventDefault();
    this.props.history.push('/businesses');
  };
  handleWorkspaces = (event) => {
    event.preventDefault();
    this.props.history.push('/spaces');
  };
  render() {
    return (
      <Container className="main-background">
        <Row>
          <Col lg={12} md={12} sm={12} xs={12} className="spacing">
            <Card className="welcomeBanner">
              <h3
                style={{
                  color: 'white',
                  backgroundColor: '#17c3ca',
                  marginTop: '60px',
                  marginBottom: 0,
                  paddingTop: 8,
                  paddingBottom: 8,
                  marginLeft: 350,
                  marginRight: '-1px',
                  paddingLeft: 35,
                  fontSize: 42,
                  fontFamily: 'Cabin',
                  borderRadius: '5px 0 0 5px',
                  boxShadow: '0 2px 4px #11111150',
                }}
              >
                Welcome to InnovateHER KC!
              </h3>
            </Card>
            <Card className="altBanner">
              <h3
                style={{
                  color: 'white',
                  backgroundColor: '#17c3ca',
                  marginTop: '70px',
                  marginBottom: 0,
                  paddingTop: 8,
                  paddingBottom: 8,
                  marginLeft: 255,
                  marginRight: '-1px',
                  paddingLeft: 35,
                  fontSize: 30,
                  fontFamily: 'Cabin',
                  borderRadius: '5px 0 0 5px',
                  boxShadow: '0 2px 4px #11111150',
                }}
              >
                Welcome to InnovateHER KC!
              </h3>
            </Card>
            <Card className="phone">
              <h3
                style={{
                  color: 'white',
                  backgroundColor: '#17c3ca',
                  marginTop: '80px',
                  marginBottom: 0,
                  paddingTop: 10,
                  paddingBottom: 10,
                  marginLeft: 80,
                  marginRight: '-1px',
                  paddingLeft: 15,
                  fontSize: 20,
                  fontFamily: 'Cabin',
                  borderRadius: '5px 0 0 5px',
                  boxShadow: '0 2px 4px #11111150',
                }}
              >
                Welcome to InnovateHER KC!
              </h3>
            </Card>
          </Col>
        </Row>
        <hr className="rounded-divider" />
        <Row className="text-center">
          <Col
            lg={3}
            md={6}
            sm={6}
            xs={12}
            style={{
              marginLeft: 0,
              marginRight: 0,
              padding: 10,
            }}
          >
            <Card
              className="community"
              style={{ borderRadius: '5px', boxShadow: '0 2px 4px #11111150' }}
            >
              <h3
                style={{
                  color: 'gray',
                  marginBottom: 0,
                  textAlign: 'center',
                  marginTop: 10,
                  fontSize: 34,
                  fontFamily: 'Cabin',
                }}
              >
                Community
              </h3>
              <Button
                style={{
                  backgroundColor: 'grey',
                  border: '1px solid white',
                  color: '#f7fafc',
                  boxShadow: '0 2px 4px #11111150',
                  fontFamily: 'cabin',
                  fontSize: 13,
                  marginTop: 215,
                  marginBottom: 10,
                  width: 130,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
                outline
                size="sm"
                onClick={this.handleCommunity}
                className="payGate"
              >
                Learn More
              </Button>{' '}
            </Card>
          </Col>
          <Col
            lg={3}
            md={6}
            sm={6}
            xs={12}
            style={{
              marginTop: '0px',
              marginBottom: 0,
              marginLeft: 0,
              marginRight: 0,
              padding: 10,
            }}
          >
            <Card
              className="speakers"
              style={{ borderRadius: '5px', boxShadow: '0 2px 4px #11111150' }}
            >
              <h3
                style={{
                  color: 'gray',
                  marginBottom: 0,
                  textAlign: 'center',
                  marginTop: 10,
                  fontSize: 34,
                  fontFamily: 'Cabin',
                }}
              >
                Speakers
              </h3>
              <Button
                style={{
                  backgroundColor: 'grey',
                  border: '1px solid white',
                  color: '#f7fafc',
                  boxShadow: '0 2px 4px #11111150',
                  fontFamily: 'cabin',
                  fontSize: 13,
                  marginTop: 215,
                  marginBottom: 10,
                  width: 130,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
                outline
                size="sm"
                onClick={this.handleSpeakers}
                className="payGate"
              >
                Learn More
              </Button>{' '}
            </Card>
          </Col>

          <Col
            lg={3}
            md={6}
            sm={6}
            xs={12}
            style={{
              marginLeft: 0,
              marginRight: 0,
              padding: 10,
            }}
          >
            <Card
              className="workspaces"
              style={{ borderRadius: '5px', boxShadow: '0 2px 4px #11111150' }}
            >
              <h3
                style={{
                  color: 'gray',
                  marginBottom: 0,
                  textAlign: 'center',
                  marginTop: 10,
                  fontSize: 34,
                  fontFamily: 'Cabin',
                }}
              >
                Work Spaces
              </h3>
              <Button
                style={{
                  backgroundColor: 'grey',
                  border: '1px solid white',
                  color: '#f7fafc',
                  boxShadow: '0 2px 4px #11111150',
                  fontFamily: 'cabin',
                  fontSize: 13,
                  marginTop: 215,
                  marginBottom: 10,
                  width: 130,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
                outline
                size="sm"
                onClick={this.handleWorkspaces}
                className="payGate"
              >
                Learn More
              </Button>{' '}
            </Card>
          </Col>
          <Col
            lg={3}
            md={6}
            sm={6}
            xs={12}
            style={{
              marginLeft: 0,
              marginRight: 0,
              padding: 10,
            }}
          >
            <Card
              className="businesses"
              style={{ borderRadius: '5px', boxShadow: '0 2px 4px #11111150' }}
            >
              <h3
                style={{
                  color: 'gray',
                  marginBottom: 0,
                  textAlign: 'center',
                  marginTop: 10,
                  fontSize: 34,
                  fontFamily: 'Cabin',
                }}
              >
                Businesses
              </h3>
              <Button
                style={{
                  backgroundColor: 'grey',
                  border: '1px solid white',
                  color: '#f7fafc',
                  boxShadow: '0 2px 4px #11111150',
                  fontFamily: 'cabin',
                  fontSize: 13,
                  marginTop: 215,
                  marginBottom: 10,
                  width: 130,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
                outline
                size="sm"
                onClick={this.handleBusinesses}
                className="payGate"
              >
                Learn More
              </Button>{' '}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(mapStoreToProps)(MainPage);
