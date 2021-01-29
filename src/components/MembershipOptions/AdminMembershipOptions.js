import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';

import './AdminMembership.css';

// Argon Components
import { Button, Container, Row, Col, Card, CardBody } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import MembershipModal from './MembershipModal';
import Member from '../Admin/MemberManagement/Member';

class AdminMembership extends Component {
  state = {
    activeTab: '1',
    member_level: '',
  };

  componentDidMount() {
    document.title = 'ConnectHER';
    this.props.dispatch({
      type: 'FETCH_LEVEL_COUNTS',
    });
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    return (
      <Container className="admin">
        <Row>
          <Col className="adminOptions" lg={3} md={3} sm={12} xs={12}>
            <Card className="admin-options">
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
                Member Plan 1
              </h3>
              <h5
                style={{
                  color: '#6C5B7B',
                  marginTop: 0,
                  marginBottom: 2,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  fontSize: 20,
                  fontFamily: 'Cabin',
                }}
              >
                $10 Monthly
              </h5>
              <div className="adminHeightControl">
                <p
                  style={{
                    textAlign: 'center',
                    marginTop: 0,
                    marginBottom: 5,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    fontSize: 18,
                    fontFamily: 'Lato:wght@300',
                    padding: 2,
                  }}
                >
                  {this.props.store.countsReducer.one} Members Registered
                </p>
              </div>
            </Card>
          </Col>
          <Col className="adminOptions" lg={3} md={3} sm={12} xs={12}>
            <Card className="admin-options">
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
                Member Plan 2
              </h3>
              <h5
                style={{
                  color: '#6C5B7B',
                  marginTop: 0,
                  marginBottom: 2,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  fontSize: 20,
                  fontFamily: 'Cabin',
                }}
              >
                $20 Monthly
              </h5>
              <div className="adminHeightControl">
                <p
                  style={{
                    textAlign: 'center',
                    marginTop: 0,
                    marginBottom: 5,
                    fontSize: 18,
                    fontFamily: 'Lato:wght@300',
                    padding: 2,
                  }}
                >
                  {this.props.store.countsReducer.two} Members Registered
                </p>
              </div>{' '}
            </Card>
          </Col>
          <Col className="adminHeightControl" lg={3} md={3} sm={12} xs={12}>
            <Card className="admin-options">
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
                Member Plan 3
              </h3>
              <h5
                style={{
                  color: '#6C5B7B',
                  marginTop: 0,
                  marginBottom: 2,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  fontSize: 20,
                  fontFamily: 'Cabin',
                }}
              >
                $60 Monthly
              </h5>
              <div className="adminHeightControl">
                <p
                  style={{
                    textAlign: 'center',
                    marginTop: 0,
                    marginBottom: 5,
                    fontSize: 18,
                    fontFamily: 'Lato:wght@300',
                    padding: 2,
                  }}
                >
                  {this.props.store.countsReducer.three} Members Registered
                </p>
              </div>
            </Card>
          </Col>
          <Col className="adminHeightControl" lg={3} md={3} sm={12} xs={12}>
            <Card className="admin-options">
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
                View Full List
              </h3>
              <MembershipModal />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(mapStoreToProps)(withRouter(AdminMembership));
