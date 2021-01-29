import { connect } from 'react-redux';
import style_list from '../../styles/list'; // custom styles object
import { Button } from 'reactstrap';

import { useFormik } from 'formik';
import Swal from 'sweetalert2';

import React, { Component } from 'react';

class IndustryForm extends Component {
  state = {
    user_id: this.props.store.user.id,
    selected: [],
    multi_label: 'Checkboxes',
  };
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_INDUSTRIES',
    });
  }

  handleSubmit = (event) => {
    this.props.dispatch({
      type: 'POST_MULTIDATA',
      payload: {
        user_id: this.props.store.user.id,
        label: this.state.multi_label,
        selected: this.state.selected,
      },
    });
    this.setState({
      selected: [],
      multi_label: 'Mui Checkboxes',
    });
    this.props.callback();
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
        <h2
          style={{
            fontFamily: 'cabin',
            fontSize: 20,
            color: '#6c5b78',
            textAlign: 'center',
          }}
        >
          Please Select All That Apply
        </h2>
        <div>
          {this.props.store.industries.map((item, index) => {
            return (
              <label>
                <input
                  type="checkbox"
                  checked={this.state.selected.indexOf(item.id) !== -1}
                  value={item.id}
                  onChange={(event) => this.handleChangeFor(event, 'selected')}
                />
                <span style={{ fontFamily: 'lato' }}>{item.name}</span>
              </label>
            );
          })}
        </div>
        <Button
          block
          style={{ ...style_list.register.button }}
          size="large"
          className="profile-button"
        >
          Save
        </Button>
      </form>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(IndustryForm);
