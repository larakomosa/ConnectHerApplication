import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import { Row, Col, Input, Container } from 'reactstrap';
import SearchResults from '../SearchResults/SearchResults';

// creating a Search functional component to reuse in search page and for skills
function SearchOptions({ skills }) {
  // Using hooks we're creating local state for a search Term and a search Result
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = skills.filter(
      (skill) =>
        skill.skill.toLowerCase().includes(searchTerm) ||
        skill.skill.includes(searchTerm)
    );
    setSearchResults(results);
  }, [skills, searchTerm]);

  return (
    <div>
      <Container className="bg-secondary">
        <Row>
          {/* <Col lg={{ size: 6, offset: 3 }}> */}
          <Input
            className="form-control-alternative"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
          />
          {/* </Col> */}
        </Row>
        <Row>
          <Col
            lg={{ size: 10, offset: 1 }}
            style={{ height: '300px', overflow: 'scroll' }}
          >
            <SearchResults results={searchResults} />
          </Col>
        </Row>
        <br />
      </Container>
    </div>
  );
}

export default connect(mapStoreToProps)(SearchOptions);
