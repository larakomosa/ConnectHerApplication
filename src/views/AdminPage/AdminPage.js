import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Pie } from 'react-chartjs-2';
import ProfileSearch from '../../components/ProfileSearch/ProfileSearch';
import { Button, Row, Col, Card } from 'reactstrap';
import AdminSearch from '../../components/AdminSearch/AdminSearch';
import AdminMembership from '../../components/MembershipOptions/AdminMembershipOptions';

import './AdminPage.css';

import AdminCharts from '../../components/Admin/AdminCharts';
import MemberManager from '../../components/Admin/MemberManagement/Mentor_Mentee';
import MentorMentee from '../../components/Mentor_Mentee/Mentor_Mentee';

import { transformAuthInfo } from 'passport';

import function_list from '../../functions/list';

let results = 0;

class AdminPage extends Component {
  state = {
    searchTerm: 'display_name',
    rSelected: 1,
    title: 'Age',
    titleNum: 1,
  };

  componentDidMount() {
    let lastResultsCheck = 0;
    this.props.dispatch({
      type: 'FETCH_ALL_PROFILES',
    });
    this.props.dispatch({
      type: 'FETCH_LEVEL_COUNTS',
    });
  }

  handleClick = (key) => {
    this.props.history.push({
      pathname: 'admin-overview',
      state: {
        graphClicked: key,
      },
    });
  };

  getState = () => {
    return this.state;
  };

  setTitle = (title) => {
    this.setState({
      ...this.state,
      title: title,
    });
  };

  handleResults = (resultsFromGraph) => {
    results = resultsFromGraph;
  };

  handleAdmin = (event) => {
    event.preventDefault();
    this.props.history.push('/admin-overview');
  };

  rotateTitle = (movement) => {
    const newState = function_list.getNextGraph(movement, this.state);
    this.setState({
      ...this.state,
      ...newState,
    });
  };

  render() {
    const methods = {
      handleClick: this.handleClick,
      getState: this.getState,
      setTitle: (title) => {
        this.setTitle(title);
      },
      handleResults: (results) => {
        this.handleResults(results);
      },
    };

    if (this.props.store.user.access_level != 2) {
      return (
        <h2 style={{ topMargin: 75, fontSize: 'vw', textAlign: 'center' }}>
          You are not authorized to view this area.
        </h2>
      );
    } else {
      if (this.props.store.user.access_level === null) {
        return <h2>Please Login to View this Page</h2>;
      } else {
        if (this.props.store.user.access_level == 2) {
          return (
            <div style={{ marginTop: '-82px' }}>
              <Row>
                <Card className="welcomeBanner1">
                  <h2
                    style={{
                      marginTop: '10px',
                      fontFamily: 'cabin',
                      fontSize: '60px',
                      textAlign: 'center',
                      color: '#ECECEC',
                    }}
                  >
                    Admin Dashboard
                  </h2>
                </Card>
              </Row>

              <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <div
                  className="chart_category"
                  style={{ marginTop: -40, width: '100%' }}
                >
                  <img
                    src="https://primebucket2020.s3.us-east-2.amazonaws.com/cc3158c1-2047-48ee-a1f7-759ee3c3f60f_172-right-arrows-1.svg"
                    className="adminButtonLeft"
                    onClick={() => {
                      this.rotateTitle('left');
                    }}
                  ></img>

                  <h1 className="chartBoxTitle">
                    {this.state.title || 'loading...'}
                  </h1>
                  <img
                    src="https://primebucket2020.s3.us-east-2.amazonaws.com/5d32aaa3-44d3-459b-9f72-bcc59821efe1_171-right-arrows.svg"
                    className="adminButtonRight"
                    onClick={() => {
                      this.rotateTitle('right');
                    }}
                  ></img>

                  {/* <i class="fa fa-arrow-right adminButtonRightImg"></i> */}
                </div>
              </div>
              <AdminCharts className="charts" methods={methods} />
              <p
                className="adminChartResultsTest"
                style={{
                  fontSize: 25,
                  fontFamily: 'lato',
                  color: '#6c5b78',
                }}
              >
                This chart generated from a total of {results} user results!
              </p>

              <Row>
                {' '}
                <Col
                  className="pie"
                  style={{ marginTop: 12, marginBottom: 15 }}
                  lg={{ size: 12 }}
                  md={12}
                  s={12}
                  xs={12}
                >
                  <AdminMembership />
                </Col>
              </Row>
              <Row>
                <Col lg={{ size: 10, offset: 1 }} md={4} s={12} xs={12}>
                  <AdminSearch
                    skills={this.props.store.memberListingsReducer}
                    term={this.state.searchTerm}
                  />
                </Col>
              </Row>
            </div>
          );
        }
      }
    }
  }
}

export default connect(mapStoreToProps)(AdminPage);
