import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { useFormik } from 'formik';

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
function MemberDemoForm(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const formik = useFormik({
    initialValues: {
      age: '', // string
      ethnicity: '', // string
      gender: '', // string
      sexual_orientation: '', // string
      ability: '', // string
      income_level: '', // string
      education_level: '', // string
    },

    onSubmit: (values) => {
      props.toggle('4', 'bypass');
      props.dispatch({
        type: 'HOLD_DEMO', // HOLD_DEMO
        payload: values,
      });
    },
  });

  return (
    <>
      <Form style={props.style} onSubmit={formik.handleSubmit}>
        <Label htmlFor="age">Age Range</Label>
        <Input
          required
          style={style_list.register.form_inputC}
          id="age"
          name="age"
          type="select"
          onChange={formik.handleChange}
          value={formik.values.age}
        >
          <option value="">Choose one of the following...</option>
          <option value="<18">18 years of age or less</option>
          <option value="18-24">18-24</option>
          <option value="25-34">25-34</option>
          <option value="35-44">35-44</option>
          <option value="45-54">45-54</option>
          <option value="55-64">55-64</option>
          <option value="65-74">65-74</option>
          <option value=">=75">75 years of age or greater</option>
        </Input>
        <Label htmlFor="ethnicity">Ethnicity</Label>
        <Input
          required
          style={style_list.register.form_inputC}
          id="ethnicity"
          name="ethnicity"
          type="select"
          onChange={formik.handleChange}
          value={formik.values.ethnicity}
        >
          <option value="">Choose one of the following...</option>
          <option value="American Indian or other Native American">
            American Indian or other Native American
          </option>
          <option value="Asian, Asian American, or Pacific Islander">
            Asian, Asian American, or Pacific Islander
          </option>
          <option value="Mexican or Mexican American">
            Mexican or Mexican American
          </option>
          <option value="Multiracial">Multiracial</option>
          <option value="Other Hispanic or Latinx">
            Other Hispanic or Latinx
          </option>
          <option value="Puerto Rican">Puerto Rican</option>
          <option value="White (non-Hispanic)">White (non-Hispanic)</option>
          <option value="Other">Other</option>
          <option value="I prefer not to answer">I prefer not to answer</option>
        </Input>
        <Label htmlFor="gender">Gender Identity</Label>
        <Input
          required
          style={style_list.register.form_inputC}
          id="gender"
          name="gender"
          type="select"
          onChange={formik.handleChange}
          value={formik.values.gender}
        >
          <option value="">Choose one of the following...</option>
          <option value="Female / Female-Identifying">
            Female / Female-Identifying
          </option>
          <option value="Non-Binary">Non-Binary</option>
          <option value="I prefer not to answer">I prefer not to answer</option>
        </Input>
        <Label htmlFor="sexual_orientation">Sexual Orientation</Label>
        <Input
          required
          style={style_list.register.form_inputC}
          id="sexual_orientation"
          name="sexual_orientation"
          type="select"
          onChange={formik.handleChange}
          value={formik.values.sexual_orientation}
        >
          <option value="">Choose one of the following...</option>
          <option value="Female / Female-Identifying">
            Female / Female-Identifying
          </option>
          <option value="Straight / Heterosexual">
            {' '}
            Straight / Heterosexual
          </option>
          <option value="LGBTQIA+">LGBTQIA+</option>
          <option value="I prefer not to answer">I prefer not to answer</option>
        </Input>
        <Label htmlFor="ability">Ability</Label>
        <Input
          required
          style={style_list.register.form_inputC}
          id="ability"
          name="ability"
          type="select"
          onChange={formik.handleChange}
          value={formik.values.ability}
        >
          <option value="">Choose one of the following...</option>
          <option value="I have a disability">I have a disability</option>
          <option value="I do not have a disability">
            {' '}
            I do not have a disability
          </option>
          <option value="I prefer not to answer">I prefer not to answer</option>
        </Input>
        <Label htmlFor="income_level">Income Level</Label>
        <Input
          required
          style={style_list.register.form_inputC}
          id="income_level"
          name="income_level"
          type="select"
          onChange={formik.handleChange}
          value={formik.values.income_level}
        >
          <option value="">Choose one of the following...</option>
          <option value="<40000">Less than $40,000</option>
          <option value="40000-79999"> $40,000-$79,999</option>
          <option value="80000-119999">$80,000-$119,999</option>
          <option value=">120,000">Over $120,000</option>
          <option value="I prefer not to answer">I prefer not to answer</option>
        </Input>

        <Label htmlFor="education_level">Education Level</Label>
        <Input
          required
          style={style_list.register.form_inputC}
          id="education_level"
          name="education_level"
          type="select"
          onChange={formik.handleChange}
          value={formik.values.education_level}
        >
          <option value="">Choose one of the following...</option>
          <option value="Less than high school">Less than high school</option>
          <option value="High School diploma or GED">
            {' '}
            High School diploma or GED
          </option>
          <option value="Some College">Some College</option>
          <option value="Associate Degree">Associate's Degree</option>
          <option value="Bachelor Degree">Bachelor's Degree</option>
          <option value="Master Degree">Master's Degree</option>
          <option value="Doctoral Degree">Doctoral Degree</option>
          <option value="I prefer not to answer">I prefer not to answer</option>
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
              Next
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default connect(mapStoreToProps)(MemberDemoForm);
