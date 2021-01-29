import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import styles from './SearchResults.module.css';

import { Badge } from 'reactstrap';
// Displays results when placed in the Search Option map function
class SearchResults extends Component {
  state = {
    selectedSkills: [],
  };

  selectSkill = (skill) => () => {
    this.props.dispatch({
      type: 'ADD_SKILL',
      payload: skill,
    });
  };

  render() {
    return (
      <>
        {this.props.results.map((skill, i) => {
          let color;
          switch (skill.category_id) {
            case 1:
              color = 'primary';
              break;
            case 2:
              color = 'info';
              break;
            case 3:
              color = 'secondary';
              break;
            case 4:
              color = 'success';
              break;
            case 5:
              color = 'danger';
              break;
            case 6:
              color = 'warning';
              break;
            case 7:
              color = 'primary';
              break;
            case 8:
              color = 'info';
              break;
            case 9:
              color = 'secondary';
              break;
            case 10:
              color = 'success';
              break;
            case 11:
              color = 'danger';
              break;
            case 12:
              color = 'warning';
              break;
            default:
              color = 'primary';
              break;
          }
          return (
            <Badge className="mr-1 mt-1" key={i} pill color={color}>
              {skill.skill}
              <span className={styles.cancelSkill}>
                <i
                  className="ni ni-fat-add"
                  onClick={this.selectSkill(skill)}
                />
              </span>
            </Badge>
          );
        })}
      </>
    );
  }
}

export default connect(mapStoreToProps)(SearchResults);
