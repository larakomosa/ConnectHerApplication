import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Pie } from 'react-chartjs-2';
import ProfileSearch from '../../components/ProfileSearch/ProfileSearch';
import { Button, Row, Col } from 'reactstrap';
import AdminSearch from '../../components/AdminSearch/AdminSearch';

import './Admin.css';

import function_list from '../../functions/list';

class AdminPage extends Component {
  render() {
    const method = this.props.methods;

    const graphData = {
      ...function_list.adminHandleGraphSwitch({
        type: method.getState().title,
        reducer: this.props.store.demographicReducer,
      }),
    };
    return (
      <>
        <div className="chartBox">
          {function_list.buildAdminGraph(graphData, method)}
        </div>
        {/* <Pie
          onElementsClick={() => {
            method.handleClick('age');
          }}
          onClick={this.handleAgeClick}
          data={function_list.adminChartData({
            type: 'age',
            reducer: this.props.store.demographicReducer.age,
            call: 'data',
          })}
          height={50}
          options={function_list.adminChartData({ type: 'Age' })}
        />
        <Pie
          onElementsClick={() => {
            method.handleClick('ethnicity');
          }}
          data={function_list.adminChartData({
            type: 'ethnicity',
            reducer: this.props.store.demographicReducer.ethnicity,
            call: 'data',
          })}
          height={50}
          options={function_list.adminChartData({ type: 'Ethnicity' })}
        />
        <Pie
          onElementsClick={() => {
            method.handleClick('gender');
          }}
          data={function_list.adminChartData({
            type: 'genderId',
            reducer: this.props.store.demographicReducer.gender,
            call: 'data',
          })}
          height={50}
          options={function_list.adminChartData({ type: 'Gender Identity' })}
        />
        <Pie
          onElementsClick={() => {
            method.handleClick('sex');
          }}
          data={function_list.adminChartData({
            type: 'sexO',
            reducer: this.props.store.demographicReducer.sexualOrientation,
            call: 'data',
          })}
          height={50}
          options={function_list.adminChartData({ type: 'Sexual Orientation' })}
        /> */}
      </>
    );
  }
}

export default connect(mapStoreToProps)(AdminPage);
