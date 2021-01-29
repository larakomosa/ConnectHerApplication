import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './LandingPage.css';

// CUSTOM COMPONENTS
import RegistrationOptions from '../../components/MembershipOptions/MembershipOptions';
import LoginForm from '../../components/LoginForm/LoginForm';
import function_list from '../../functions/list';
import styles_list from '../../styles/list';

// Argon Components
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import style_list from '../../styles/list';

class LandingPage extends Component {
  state = {
    activeTab: '1',
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

  onLogin = (event) => {
    this.props.history.push('/login');
  };

  render() {
    return (
      <Container className="card-img-overlay background">
        <Row>
          <Col
            className="tabbing"
            lg={{ size: 8, offset: 2 }}
            md={{ size: 10, offset: 1 }}
            sm={{ size: 10, offset: 1 }}
          >
            <Nav
              tabs
              style={{
                backgroundColor: '#f7fafc',
                boxShadow: '0 2px 4px #11111150',
                position: 'relative',
                top: '0px',
                zIndex: '5',
                borderRadius: '5px 5px 0 0',
              }}
              className="form nav-fill flex-column flex-sm-row"
            >
              <NavItem style={{ borderRadius: '5px 0 0 0' }}>
                <NavLink
                  style={{
                    borderRadius: '5px 0 0 0',
                    boxShadow: '0px 2px 4px #11111150',
                  }}
                  className={classnames('mb-sm-0 mb-md-0', {
                    active: this.state.activeTab === '1',
                  })}
                  onClick={() => {
                    this.toggle('1');
                  }}
                >
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{
                    borderRadius: '0 5px 0 0',
                    boxShadow: '0px 2px 4px #11111150',
                  }}
                  className={classnames('mb-sm-0 mb-md-0', {
                    active: this.state.activeTab === '2',
                  })}
                  onClick={() => {
                    this.toggle('2');
                  }}
                >
                  Register
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col
                className="tabbing"
                lg={{ size: 8, offset: 2 }}
                md={{ size: 10, offset: 1 }}
                sm={{ size: 10, offset: 1 }}
                xs={12}
              >
                <Card style={{ borderRadius: '0 0 5px 5px' }}>
                  <CardBody
                    className="login"
                    style={{ borderRadius: '0 0 5px 5px' }}
                  >
                    <LoginForm />
                  </CardBody>
                </Card>
                <div className="copyright">
                  {' '}
                  <span>
                    {' '}
                    &copy; An InnovateHER KC Space | Built with {''}
                    <i className="fa fa-heartbeat" /> by Prime Digital Academy
                  </span>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col
                className="tabbing"
                lg={{ size: 8, offset: 2 }}
                md={{ size: 10, offset: 1 }}
                sm={{ size: 10, offset: 1 }}
                xs={12}
              >
                <Card style={{ borderRadius: '0 0 5px 5px' }}>
                  <CardBody
                    className="login"
                    style={{ borderRadius: '0 0 5px 5px' }}
                  >
                    <RegistrationOptions />
                  </CardBody>
                </Card>
                <div className="copyright">
                  {' '}
                  <span>
                    {' '}
                    &copy; An InnovateHER KC Space | Built with {''}
                    <i className="fa fa-heartbeat" /> by Prime Digital Academy
                  </span>
                </div>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </Container>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
