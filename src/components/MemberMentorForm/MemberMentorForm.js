import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { useFormik } from 'formik';

// import reactstrap Styles/Components
import {
  FormGroup,
  Form,
  Input,
  Label,
  Button,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Card,
  CardTitle,
  CardText,
  CardBody,
  Row,
  Col,
  Container,
} from 'reactstrap';

// Want to mentor
// Want mentoring
// Have mentored
// Reasons for wanting to  mentor
// Mentorship goals

// Basic functional component structure for React with default state
// value setup.
function MemberMentorForm(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const formik = useFormik({
    initialValues: {
      displayName: '',
    },
    onSubmit: (values) => {
      // setHeading(JSON.stringify(values, null, 2));
      // alert(JSON.stringify(values, null, 2));
    },
  });

  const submitData = () => {
    props.dispatch({
      type: 'FINAL_SUBMIT',
      payload: { form: props.store.form, id: props.store.user.id },
    });
  };

  return (
    <>
      <Row>
        <Col>
          <h1>Work in Progress</h1>
          <h1>Skills Lists Select</h1>
          <Button onClick={submitData}>Submit</Button>
        </Col>
      </Row>
    </>
  );
}

export default connect(mapStoreToProps)(MemberMentorForm);
