import { connect } from 'react-redux';

import { useFormik } from 'formik';
import Swal from 'sweetalert2';

import React, { Component } from 'react';

class MentorSurveyForm extends Component {
  state = {
    selected: [],
    multi_label: 'Checkboxes',
  };
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_CATEGORIES',
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: 'POST_MULTIDATA',
      payload: {
        label: this.state.multi_label,
        selected: this.state.selected,
      },
    });

    this.setState({
      selected: [],
      multi_label: 'Mui Checkboxes',
    });
  };

  handleChangeFor = (event, stateKey) => {
    let newValue = event.target.value;
    const isSelected = event.target.checked;

    if (event.target.type === 'checkbox' && isSelected === true) {
      // is not already selected so adding it to selected
      newValue = [...this.state[stateKey], parseInt(event.target.value)];
    } else if (event.target.type === 'checkbox' && isSelected === false) {
      // is already selected so now we need to remove it from selected
      newValue = this.state[stateKey].filter((selectedItem) => {
        return selectedItem !== parseInt(event.target.value);
      });
    }

    this.setState({
      [stateKey]: newValue,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Multi-Select: Checkboxes</h2>

        <div>
          <label>
            Multi-Label:
            <input
              type="text"
              value={this.state.multi_label}
              onChange={(event) => this.handleChangeFor(event, 'multi_label')}
            />
          </label>
        </div>
        <div>
          {this.props.store.skillCategories.map((item, index) => {
            return (
              <label>
                <input
                  type="checkbox"
                  checked={this.state.selected.indexOf(item.id) !== -1}
                  value={item.id}
                  onChange={(event) => this.handleChangeFor(event, 'selected')}
                />
                <span>{item.name}</span>
              </label>
            );
          })}
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(MentorSurveyForm);
