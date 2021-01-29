import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Importing Reactstrap
import {
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from 'reactstrap';

import './LoginForm.css';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.email && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          email: this.state.email,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    return (
      <Form className="formControl" onSubmit={this.login}>
        <h3
          style={{
            color: '#823bae',
            marginTop: '0',
            marginBottom: 5,
            marginLeft: 10,
            fontSize: 25,
            fontFamily: 'Cabin',
          }}
        >
          Member Login
        </h3>
        {this.props.store.errors.loginMessage && (
          <h3 className="alert" role="alert">
            {this.props.store.errors.loginMessage}
          </h3>
        )}
        <FormGroup>
          <InputGroup className="input-group-alternative mb-4">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="ni ni-email-83" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              className="form-control-alternative"
              size="sm"
              placeholder="name@example.com"
              type="email"
              name="email"
              value={this.state.email}
              required
              onChange={this.handleInputChangeFor('email')}
            />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <InputGroup className="input-group-alternative mb-4">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="ni ni-lock-circle-open" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              className="form-control-alternative"
              size="sm"
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              required
              onChange={this.handleInputChangeFor('password')}
            />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Button
            style={{
              marginBottom: 0,
              backgroundColor: '#17c3ca',
              border: '1px solid white',
              color: '#f7fafc',
              boxShadow: '0 2px 4px #11111150',
              height: 40,
            }}
            outline
            block
            type="submit"
            name="submit"
          >
            Log In
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

export default connect(mapStoreToProps)(LoginForm);
