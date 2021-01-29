import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';

import './MembershipOptions.css';

// Argon Components
import { Button, Container, Row, Col, Card, CardBody } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

class RegistrationOptions extends Component {
  state = {
    activeTab: '1',
    member_level: '',
  };

  componentDidMount() {
    document.title = 'ConnectHER';
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  handleRegister1 = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'HOLD_ACCESS',
      payload: { member_level: 1 },
    });
    this.props.history.push('/user');
  };

  handleRegister2 = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'HOLD_ACCESS',
      payload: { member_level: 2 },
    });
    this.props.history.push('/user');
  };
  handleRegister3 = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'HOLD_ACCESS',
      payload: { member_level: 3 },
    });
    this.props.history.push('/user');
  };

  render() {
    return (
      <Container className="registration">
        <Row>
          <Col className="registrationOptions" lg={4} md={4} sm={12} xs={12}>
            <Card className="options">
              <h3
                style={{
                  color: '#17C3CA',
                  marginTop: '0px',
                  marginBottom: 0,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  fontSize: 30,
                  fontFamily: 'Cabin',
                }}
              >
                Plan 1
              </h3>
              <h5
                style={{
                  color: '#823bae',
                  marginTop: 0,
                  marginBottom: 2,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  fontSize: 20,
                  fontFamily: 'Cabin',
                }}
              >
                $10/Month
              </h5>
              <div className="heightControl">
                <p
                  style={{
                    textAlign: 'center',
                    marginTop: 0,
                    marginBottom: 5,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    fontSize: 15,
                    fontFamily: 'Lato:wght@300',
                    padding: 2,
                  }}
                >
                  includes access to membership database and 50% off premium
                  events
                </p>
              </div>
              <Button
                style={{
                  marginBottom: 10,
                  backgroundColor: '#17c3ca',
                  border: '1px solid white',
                  color: '#f7fafc',
                  boxShadow: '0 2px 4px #11111150',
                }}
                outline
                size="sm"
                value="1"
                checked={this.state.member_level === '1'}
                onClick={this.handleRegister1}
                className="payGate"
              >
                Register
              </Button>{' '}
            </Card>
          </Col>
          <Col className="registrationOptions" lg={4} md={4} sm={12} xs={12}>
            <Card className="options">
              <h3
                style={{
                  color: '#17C3CA',
                  marginTop: '0px',
                  marginBottom: 0,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  fontSize: 30,
                  fontFamily: 'Cabin',
                }}
              >
                Plan 2
              </h3>
              <h5
                style={{
                  color: '#823bae',
                  marginTop: 0,
                  marginBottom: 2,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  fontSize: 20,
                  fontFamily: 'Cabin',
                }}
              >
                $20/Month
              </h5>
              <div className="heightControl">
                <p
                  style={{
                    textAlign: 'center',
                    marginTop: 0,
                    marginBottom: 5,
                    fontSize: 15,
                    fontFamily: 'Lato:wght@300',
                    padding: 2,
                  }}
                >
                  includes plan 1 plus access to membership program and a
                  T-shirt.
                </p>
              </div>{' '}
              <Button
                style={{
                  marginBottom: 10,
                  backgroundColor: '#17c3ca',
                  border: '1px solid white',
                  color: '#f7fafc',
                  boxShadow: '0 2px 4px #11111150',
                }}
                outline
                size="sm"
                value="2"
                checked={this.state.member_level === '2'}
                onClick={this.handleRegister2}
                className="payGate"
              >
                Register
              </Button>{' '}
            </Card>
          </Col>
          <Col className="registrationOptions" lg={4} md={4} sm={12} xs={12}>
            <Card className="options">
              <h3
                style={{
                  color: '#17C3CA',
                  marginBottom: 0,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  fontSize: 30,
                  fontFamily: 'Cabin',
                }}
              >
                Plan 3
              </h3>
              <h5
                style={{
                  color: '#823bae',
                  marginTop: 0,
                  marginBottom: 2,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  fontSize: 20,
                  fontFamily: 'Cabin',
                }}
              >
                $60/Month
              </h5>
              <div className="heightControl">
                <p
                  style={{
                    textAlign: 'center',
                    marginTop: 0,
                    marginBottom: 5,
                    fontSize: 15,
                    fontFamily: 'Lato:wght@300',
                    padding: 2,
                  }}
                >
                  includes plan 2 plus a workspace membership and access at
                  PlexPod
                </p>
              </div>
              <Button
                style={{
                  marginBottom: 10,
                  backgroundColor: '#17c3ca',
                  border: '1px solid white',
                  color: '#f7fafc',
                  boxShadow: '0 2px 4px #11111150',
                }}
                outline
                size="sm"
                value="3"
                checked={this.state.member_level === '3'}
                onClick={this.handleRegister3}
                className="payGate"
              >
                Register
              </Button>{' '}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(mapStoreToProps)(withRouter(RegistrationOptions));
