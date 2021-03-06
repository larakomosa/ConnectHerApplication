import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import { Row, Col, Input } from 'reactstrap';

import SkillsSelector from '../SkillsSelector/SkillsSelector';
import AdminResults from '../AdminResults/AdminResults';
import Member from '../../components/Admin/MemberManagement/Member';

// creating a Search functional component to reuse in search page and for skills
function AdminSearch({ term, skills }) {
  // Using hooks we're creating local state for a search Term and a search Result
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  let skillsAdded = useSelector((state) => state.memberskills);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  // useEffect hook dependent upon skills, searchTerm props
  // will update each time the search input changes and the
  // results filters values that include any version of the searchTerm
  useEffect(() => {
    let search = term;
    let list = skills;
    console.log(list);

    let results = list.filter(
      (skill) =>
        skill[search].toLowerCase().includes(searchTerm) ||
        skill[search].includes(searchTerm)
    );

    if (skillsAdded.length > 0) {
      let searchSkills = skillsAdded.map((item, i) => item.skill);
      console.log(searchSkills);
      console.log('results: ', results);

      results = results.filter((user) =>
        searchSkills.every((searchTerm) =>
          user.skills.some((skillObj) => skillObj.skill === searchTerm)
        )
      );
      // results = results.filter((v) =>
      //   v.skills.some((skill) => searchSkills.includes(skill.skill))
      // );
    }
    setSearchResults(results);
  }, [skills, term, searchTerm, skillsAdded]);
  return (
    <div>
      <Row>
        <Col
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
          lg={{ size: 10, offset: 1 }}
          md={{ size: 10, offset: 1 }}
        >
          {/* <SkillsSelector /> */}
          <Input
            style={{ width: '100%', margin: '5px 0 10px 0px' }}
            className="form-control-alternative"
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleChange}
          />
          <SkillsSelector />
        </Col>
      </Row>
      <Row>
        <Col>
          <Member results={searchResults} />
        </Col>
      </Row>
    </div>
  );
}

export default connect(mapStoreToProps)(AdminSearch);
