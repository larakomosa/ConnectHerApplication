import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';

import style_list from '../../styles/list';
// import reactstrap Styles/Components
import {
  //FormGroup,
  Form,
  Input,
  Label,
  Button,
  //InputGroupAddon,
  //InputGroupText,
  //InputGroup,
  //Card,
  //CardTitle,
  //CardText,
  //CardBody,
  Row,
  Col,
  //Container,
} from 'reactstrap';

// Basic functional component structure for React with default state
// value setup.
function MemberPersonalityForm(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const formik = useFormik({
    initialValues: {
      user_id: props.store.user.id,
      myers_briggs: '', // string
      disc: '', // string
      agility_index: '', // string
      enneagram: '', // string
    },

    onSubmit: (values) => {
      props.dispatch({
        type: 'SUBMIT_PERSONALITY',
        payload: values,
      });
      Swal.fire('Your Personality Survey has been submitted');
      props.callback();
    },
  });

  return (
    <>
      <Form style={props.style} onSubmit={formik.handleSubmit}>
        <Label htmlFor="myers_briggs">Myers-Briggs</Label>
        <Input
          required
          style={style_list.register.form_inputC}
          id="myers_briggs"
          name="myers_briggs"
          type="select"
          onChange={formik.handleChange}
          value={formik.values.myers_briggs}
        >
          <option value="">Choose one of the following...</option>
          <option value="ISTJ">ISTJ - The Inspector</option>
          <option value="ISTP">ISTP - The Crafter</option>
          <option value="ISFJ">ISFJ - The Protector</option>
          <option value="ISFP">ISFP - The Artist</option>
          <option value="INFJ">INFJ - The Advocate</option>
          <option value="INFP">INFP - The Mediator</option>
          <option value="INTJ">INTJ - The Architect</option>
          <option value="INTP">INTP - The Thinker</option>
          <option value="ESTP">ESTP - The Persuader</option>
          <option value="ESTJ">ESTJ - The Director</option>
          <option value="ESFP">ESFP - The Performer</option>
          <option value="ESFJ">ESFJ - The Caregiver</option>
          <option value="ENFP">ENFP - The Champion</option>
          <option value="ENFJ">ENFJ - The Giver</option>
          <option value="ENTP">ENTP - The Debater</option>
          <option value="ENTJ">ENTJ - The Commander</option>
          <option value="I have not taken this test">
            I have not taken this test
          </option>
        </Input>
        <Label htmlFor="disc">DiSC</Label>
        <Input
          required
          style={style_list.register.form_inputC}
          id="disc"
          name="disc"
          type="select"
          onChange={formik.handleChange}
          value={formik.values.disc}
        >
          <option value="">Choose one of the following...</option>
          <option value="ISTJ">D - Dominance</option>
          <option value="ISTP">I - Influence</option>
          <option value="ISFJ">S - Steadiness</option>
          <option value="ISFP">C - Conscientiousness</option>
          <option value="I have not taken this test">
            I have not taken this test
          </option>
        </Input>
        <Label htmlFor="Agility Index Top 3">Agility Index Top 3</Label>
        <Input
          required
          style={style_list.register.form_inputC}
          id="agility_index"
          name="agility_index"
          type="select"
          onChange={formik.handleChange}
          value={formik.values.agility_index}
        >
          <option value="">Choose one of the following...</option>
          <option value="Developing Others">Developing Others</option>
          <option value="Innovating">Innovating</option>
          <option value="Caring and Serving">Caring and Serving</option>
          <option value="Inspecting">Inspecting</option>
          <option value="Judging and Estimating">Judging and Estimating</option>
          <option value="Managing">Managing</option>
          <option value="Operating Objects">Operating Objects</option>
          <option value="Organizing">Organizing</option>
          <option value="Selling and Communicating">
            Selling and Communicating
          </option>
          <option value="Working with Information">
            Working with Information
          </option>
          <option value="I have not taken this test">
            I have not taken this test
          </option>
        </Input>
        <Label htmlFor="enneagram">Ennaegram</Label>
        <Input
          required
          style={style_list.register.form_inputC}
          id="enneagram"
          name="enneagram"
          type="select"
          onChange={formik.handleChange}
          value={formik.values.enneagram}
        >
          <option value="">Choose one of the following...</option>
          <option value="1">1 - The Reformer</option>
          <option value="2">2 - The Helper </option>
          <option value="3">3 - The Achiever</option>
          <option value="4">4 - The Individualist</option>
          <option value="5">5 - The Investigator</option>
          <option value="6">6 - The Loyalist </option>
          <option value="7">7 - The Enthusiast</option>
          <option value="8">8 - The Challenger</option>
          <option value="9">9 - The Peacemaker</option>
          <option value="I have not taken this test">
            I have not taken this test
          </option>
        </Input>
        <hr />
        <Row>
          <Col lg={{ size: 2, offset: 10 }}>
            <Button
              style={style_list.register.button}
              outline
              color="primary"
              type="submit"
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default connect(mapStoreToProps)(MemberPersonalityForm);
