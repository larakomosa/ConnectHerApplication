import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Col, Row } from 'reactstrap';
import AdminMemberItem from '../AdminMemberItem/AdminMemberItem';

// Displays results when placed in the Search Option map function
class AdminResults extends Component {
  render() {
    return (
      <Row>
        {this.props.results.map((item, index) => {
          return (
            <Col className="col-spacing" key={index} lg={4} md={4} sm={12}>
              <AdminMemberItem key={item.email} member={item} />
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default connect(mapStoreToProps)(AdminResults);
