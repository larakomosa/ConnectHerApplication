import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Button, Row, Col } from 'reactstrap';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.

class AdminOverviewPage extends Component {
  constructor() {
    super();
    this.state = {
      heading: 'Admin Overview',
      pieChartData: {},
      rSelected: 1,
    };
    //EVENT BINDINGS FOR ONCLICK EVENTS ON BUTTONS
    this.ageGraph = this.ageGraph.bind(this);
    this.ethnicityGraph = this.ethnicityGraph.bind(this);
    this.genderGraph = this.genderGraph.bind(this);
    this.sexGraph = this.sexGraph.bind(this);
    this.abilityGraph = this.abilityGraph.bind(this);
    this.incomeGraph = this.incomeGraph.bind(this);
    this.educationGraph = this.educationGraph.bind(this);
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'GET_AGE_DEMO',
    });
    this.props.dispatch({
      type: 'GET_ETHNICITY_DEMO',
    });
    this.props.dispatch({
      type: 'GET_GENDER_DEMO',
    });
    this.props.dispatch({
      type: 'GET_SEX_DEMO',
    });
    this.props.dispatch({
      type: 'GET_ABILITY_DEMO',
    });
    this.props.dispatch({
      type: 'GET_INCOME_DEMO',
    });
    this.props.dispatch({
      type: 'GET_EDUCATION_DEMO',
    });
    // console.log(this.props.store);
    // console.log(this.props.location.state);
    // console.log(graphClicked);
    if (this.props.location.state) {
      if (this.props.location.state.graphClicked === 'age') {
        this.ageGraph();
      } else if (this.props.location.state.graphClicked === 'ethnicity') {
        this.ethnicityGraph();
      } else if (this.props.location.state.graphClicked === 'gender') {
        this.genderGraph();
      } else if (this.props.location.state.graphClicked === 'sex') {
        this.sexGraph();
      }
    } // else {
    //   this.ageGraph();
    // }
  }

  ageGraph() {
    console.log('age clicked');
    this.setState({
      pieChartData: {
        labels: [
          '18 or younger',
          '18-24',
          '25-34',
          '35-44',
          '45-54',
          '55-64',
          '65-74',
          '75 or older',
        ],
        datasets: [
          {
            data: [
              this.props.store.demographicReducer.age.age18,
              this.props.store.demographicReducer.age.age1824,
              this.props.store.demographicReducer.age.age2534,
              this.props.store.demographicReducer.age.age3544,
              this.props.store.demographicReducer.age.age4554,
              this.props.store.demographicReducer.age.age5564,
              this.props.store.demographicReducer.age.age6574,
              this.props.store.demographicReducer.age.age75,
            ],
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#63f542',
              '#e9f540',
              '#a740f5',
              '#f540d7',
              '#112991',
              '#0f7535',
            ],
            hoverBackgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#63f542',
              '#e9f540',
              '#a740f5',
              '#f540d7',
              '#112991',
              '#0f7535',
            ],
          },
        ],
      },
      pieChartOptions: {
        title: {
          display: true,
          text: 'Age',
          fontSize: 20,
        },
        legend: {
          display: true,
          position: 'bottom',
        },
      },
      rSelected: 1,
    });
  }

  ethnicityGraph() {
    console.log('ethnicity clicked');
    this.setState({
      pieChartData: {
        labels: [
          'American Indian or other Native American',
          'Asian, Asian American, or Pacific Islander',
          'Mexican or Mexican American',
          'Multiracial',
          'Other Hispanic or Latinx',
          'Puerto Rican',
          'White (non-Hispanic)',
          'Other',
          'Prefer not to answer',
        ],
        datasets: [
          {
            data: [
              this.props.store.demographicReducer.ethnicity.indian,
              this.props.store.demographicReducer.ethnicity.asian,
              this.props.store.demographicReducer.ethnicity.mexican,
              this.props.store.demographicReducer.ethnicity.multiracial,
              this.props.store.demographicReducer.ethnicity.otherHispanic,
              this.props.store.demographicReducer.ethnicity.puertoRican,
              this.props.store.demographicReducer.ethnicity.white,
              this.props.store.demographicReducer.ethnicity.other,
              this.props.store.demographicReducer.ethnicity.noAnswer,
            ],
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#63f542',
              '#e9f540',
              '#a740f5',
              '#f540d7',
              '#112991',
              '#0f7535',
            ],
            hoverBackgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#63f542',
              '#e9f540',
              '#a740f5',
              '#f540d7',
              '#112991',
              '#0f7535',
            ],
          },
        ],
      },
      pieChartOptions: {
        title: {
          display: true,
          text: 'Ethnicity',
          fontSize: 20,
        },
        legend: {
          display: true,
          position: 'bottom',
        },
      },
      rSelected: 2,
    });
  }

  genderGraph() {
    console.log('gender clicked');
    this.setState({
      pieChartData: {
        labels: [
          'Female / Female-Identifying',
          'Non-Binary',
          'Prefer not to answer',
        ],
        datasets: [
          {
            data: [
              this.props.store.demographicReducer.gender.female,
              this.props.store.demographicReducer.gender.nonBinary,
              this.props.store.demographicReducer.gender.noAnswer,
            ],
            backgroundColor: ['#FF6384', '#36A2EB'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB'],
          },
        ],
      },
      pieChartOptions: {
        title: {
          display: true,
          text: 'Gender',
          fontSize: 20,
        },
        legend: {
          display: true,
          position: 'bottom',
        },
      },
      rSelected: 3,
    });
  }

  sexGraph() {
    console.log('sex clicked');
    this.setState({
      pieChartData: {
        labels: ['Straight / Heterosexual', 'LGBTQIA+', 'Prefer not to answer'],
        datasets: [
          {
            data: [
              this.props.store.demographicReducer.sexualOrientation.straight,
              this.props.store.demographicReducer.sexualOrientation.lgbtqia,
              this.props.store.demographicReducer.sexualOrientation.noAnswer,
            ],
            backgroundColor: ['#17c3ca', '#a62373'],
            hoverBackgroundColor: ['#17c3ca', '#a62373'],
          },
        ],
      },
      pieChartOptions: {
        title: {
          display: true,
          text: 'Sexual Orientation',
          fontSize: 20,
        },
        legend: {
          display: true,
          position: 'bottom',
        },
      },
      rSelected: 4,
    });
  }

  abilityGraph() {
    console.log('ability clicked');
    this.setState({
      pieChartData: {
        labels: ['Yes, disability', 'No, disability', 'Prefer not to answer'],
        datasets: [
          {
            data: [
              this.props.store.demographicReducer.ability.disability,
              this.props.store.demographicReducer.ability.noDisability,
              this.props.store.demographicReducer.ability.noAnswer,
            ],
            backgroundColor: ['#17c3ca', '#a62373'],
            hoverBackgroundColor: ['#17c3ca', '#a62373'],
          },
        ],
      },
      pieChartOptions: {
        title: {
          display: true,
          text: 'Ability',
          fontSize: 20,
        },
        legend: {
          display: true,
          position: 'bottom',
        },
      },
      rSelected: 5,
    });
  }

  incomeGraph() {
    console.log('income clicked');
    this.setState({
      pieChartData: {
        labels: [
          'less than $40000 per year',
          '$40,000-$79,999',
          '$80,000-$119,999',
          'Over $120,000',
          'Prefer not to answer',
        ],
        datasets: [
          {
            data: [
              this.props.store.demographicReducer.income.lessFourtyK,
              this.props.store.demographicReducer.income.fourtyK,
              this.props.store.demographicReducer.income.eightyK,
              this.props.store.demographicReducer.income.hundoK,
              this.props.store.demographicReducer.income.noAnswer,
            ],
            backgroundColor: [
              '#63f542',
              '#e9f540',
              '#a740f5',
              '#f540d7',
              '#112991',
            ],
            hoverBackgroundColor: [
              '#63f542',
              '#e9f540',
              '#a740f5',
              '#f540d7',
              '#112991',
            ],
          },
        ],
      },
      pieChartOptions: {
        title: {
          display: true,
          text: 'Income',
          fontSize: 20,
        },
        legend: {
          display: true,
          position: 'bottom',
        },
      },
      rSelected: 6,
    });
  }

  educationGraph() {
    console.log('education clicked');
    this.setState({
      pieChartData: {
        labels: [
          'Less than high school',
          'High School diploma or GED',
          'Some College',
          "Associate's Degree",
          "Bachelor's Degree",
          "Master's Degree",
          'Doctoral Degree',
          'Prefer not to answer',
        ],
        datasets: [
          {
            data: [
              this.props.store.demographicReducer.education.noHighschool,
              this.props.store.demographicReducer.education.diploma,
              this.props.store.demographicReducer.education.someCollege,
              this.props.store.demographicReducer.education.associates,
              this.props.store.demographicReducer.education.bachelors,
              this.props.store.demographicReducer.education.masters,
              this.props.store.demographicReducer.education.doctors,
              this.props.store.demographicReducer.education.noAnswer,
            ],
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#63f542',
              '#e9f540',
              '#a740f5',
              '#f540d7',
              '#112991',
              '#0f7535',
            ],
            hoverBackgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#63f542',
              '#e9f540',
              '#a740f5',
              '#f540d7',
              '#112991',
              '#0f7535',
            ],
          },
        ],
      },
      pieChartOptions: {
        title: {
          display: true,
          text: 'Education',
          fontSize: 20,
        },
        legend: {
          display: true,
          position: 'bottom',
        },
      },
      rSelected: 7,
    });
  }

  render() {
    return (
      <div>
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              onClick={this.ageGraph}
              active={this.state.rSelected === 1}
            >
              Age
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              onClick={this.ethnicityGraph}
              Active
            >
              Ethnicity
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              onClick={this.GenderGraph}
              Active
            >
              Gender
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              onClick={this.sexGraph}
              Active
            >
              Sex Graph
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              onClick={this.sexGraph}
              Active
            >
              Ability
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              onClick={this.sexGraph}
              Active
            >
              Education
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              onClick={this.sexGraph}
              Active
            >
              Sexual Orientation
            </a>
          </li>
        </ul>
        <h2>{this.state.heading}</h2>

        <Pie
          data={this.state.pieChartData}
          height={110}
          options={this.state.pieChartOptions}
        />
      </div>
    );
  }
}

export default connect(mapStoreToProps)(AdminOverviewPage);
