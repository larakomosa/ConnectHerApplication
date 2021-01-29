import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import function_list from '../../functions/list'; // custom functions object
import style_list from '../../styles/list'; // custom styles object

// Importing Reactstrap
import {
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Col,
  Row,
} from 'reactstrap';
// import '../../assets/vendor/nucleo/css/nucleo.css';
// import '../../assets/vendor/font-awesome/css/font-awesome.min.css';
// import '../../assets/scss/argon-design-system-react.scss';

class RegisterForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  registerUser = (event) => {
    event.preventDefault();
    this.props.toggle('2', 'bypass');
    this.props.dispatch({
      type: 'HOLD_REGISTER',
      payload: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
      },
    });
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  refresh() {
    this.setState({
      ...this.state,
    });
  }
  render() {
    window.onresize = () => {
      if (
        function_list.hasWindowSizeChanged({
          height: window.innerHeight,
          width: window.innerWidth,
        }) === true
      ) {
        this.refresh();
      }
    };

    const padding = function_list.registrationPadding({
      height: window.innerHeight,
      width: window.innerWidth,
    });

    return (
      <div style={{ ...style_list.register.form_base, ...padding }}>
        <div style={{ marginTop: '25px' }}>
          <Form onSubmit={this.registerUser}>
            {this.props.store.errors.registrationMessage && (
              <h3 className="alert" role="alert">
                {this.props.store.errors.registrationMessage}
              </h3>
            )}
            <Row>
              <Col>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-4">
                    <Input
                      style={style_list.register.form_inputA}
                      className="form-control-alternative"
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      value={this.state.firstName}
                      required
                      onChange={this.handleInputChangeFor('firstName')}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-4">
                    <Input
                      style={style_list.register.form_inputA}
                      className="form-control-alternative"
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      value={this.state.lastName}
                      required
                      onChange={this.handleInputChangeFor('lastName')}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-4">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText style={style_list.register.form_icon}>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      style={style_list.register.form_inputB}
                      className="form-control-alternative"
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
                      <InputGroupText style={style_list.register.form_icon}>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      style={style_list.register.form_inputB}
                      className="form-control-alternative"
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
                  <Col lg={{ size: 2, offset: 10 }}>
                    <Button
                      style={style_list.register.button}
                      name="submit"
                      outline
                      color="primary"
                      type="submit"
                    >
                      Next
                    </Button>
                  </Col>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(RegisterForm);
