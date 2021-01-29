import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import SearchOption from '../SearchOption/SearchOption';
import { Link } from 'react-router-dom';

import style_list from '../../styles/list';
import './SkillsWidget.module.css';

import classnames from 'classnames';
import {
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Badge,
  CardFooter,
} from 'reactstrap';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class SkillsWidget extends Component {
  state = {
    selectedSkills: [],
    tabs: 1,
  };

  // componentDidMount() {
  // this.props.dispatch({
  //   type: 'GET_SKILLS',
  // });
  // }

  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index,
    });
  };

  removeSkill = (i) => {
    this.props.dispatch({
      type: 'REMOVE_SKILL',
      payload: i,
    });
  };

  render() {
    return (
      <div>
        <div className="desktopDevice">
          <h2>{this.state.heading}</h2>
          {/*{ id: , category: , skill: } // {user_id: skill_id:}*/}

          <Nav
            className="deskopDevice nav-fill flex-column flex-sm-row"
            // id="tabs-icons-text"
            tabs
            role="tablist"
          >
            <NavItem className="desktopDevice">
              <NavLink
                aria-selected={this.state.tabs === 1}
                style={{ marginRight: 1 }}
                className={classnames('mb-sm-3 mb-md-0', {
                  active: this.state.tabs === 1,
                })}
                onClick={(e) => this.toggleNavs(e, 'tabs', 1)}
              >
                Leadership
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 2}
                style={{ marginRight: 1 }}
                className={classnames('mb-sm-3 mb-md-0', {
                  active: this.state.tabs === 2,
                })}
                onClick={(e) => this.toggleNavs(e, 'tabs', 2)}
              >
                Business and Entrepreneurship
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 3}
                style={{ marginRight: 1 }}
                className={classnames('mb-sm-3 mb-md-0', {
                  active: this.state.tabs === 3,
                })}
                onClick={(e) => this.toggleNavs(e, 'tabs', 3)}
              >
                Marketing, Branding and Sales
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 4}
                style={{ marginRight: 1 }}
                className={classnames('mb-sm-3 mb-md-0 tabs', {
                  active: this.state.tabs === 4,
                })}
                onClick={(e) => this.toggleNavs(e, 'tabs', 4)}
              >
                Technical
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 5}
                style={{ marginRight: 1 }}
                className={classnames('mb-sm-3 mb-md-0', {
                  active: this.state.tabs === 5,
                })}
                onClick={(e) => this.toggleNavs(e, 'tabs', 5)}
              >
                Accounting and Finance
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 6}
                style={{ marginRight: 1 }}
                className={classnames('mb-sm-3 mb-md-0', {
                  active: this.state.tabs === 6,
                })}
                onClick={(e) => this.toggleNavs(e, 'tabs', 6)}
              >
                Legal
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 7}
                style={{ marginRight: 1 }}
                className={classnames('mb-sm-3 mb-md-0', {
                  active: this.state.tabs === 7,
                })}
                onClick={(e) => this.toggleNavs(e, 'tabs', 7)}
              >
                Health and Wellness
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 8}
                className={classnames('mb-sm-3 mb-md-0', {
                  active: this.state.tabs === 8,
                })}
                onClick={(e) => this.toggleNavs(e, 'tabs', 8)}
              >
                Human Resources
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 9}
                style={{ marginRight: 1 }}
                className={classnames('mb-sm-3 mb-md-0', {
                  active: this.state.tabs === 9,
                })}
                onClick={(e) => this.toggleNavs(e, 'tabs', 9)}
              >
                Education
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 10}
                style={{ marginRight: 1 }}
                className={classnames('mb-sm-3 mb-md-0', {
                  active: this.state.tabs === 10,
                })}
                onClick={(e) => this.toggleNavs(e, 'tabs', 10)}
              >
                Artists and Creatives
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 11}
                style={{ marginRight: 1 }}
                className={classnames('mb-sm-3 mb-md-0', {
                  active: this.state.tabs === 11,
                })}
                onClick={(e) => this.toggleNavs(e, 'tabs', 11)}
              >
                Community Advocacy
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 12}
                style={{ marginRight: 1 }}
                className={classnames('mb-sm-3 mb-md-0', {
                  active: this.state.tabs === 12,
                })}
                onClick={(e) => this.toggleNavs(e, 'tabs', 12)}
              >
                Civic Engagement
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 13}
                className={classnames('mb-sm-3 mb-md-0', {
                  active: this.state.tabs === 13,
                })}
                onClick={(e) => this.toggleNavs(e, 'tabs', 13)}
              >
                All Skills
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent
            className="desktopDevice"
            activeTab={'tabs' + this.state.tabs}
          >
            <TabPane tabId="tabs1">
              {this.props.store &&
                this.props.store.skillsholder &&
                this.props.store.skillsholder['Leadership'] && (
                  <>
                    <SearchOption
                      skills={this.props.store.skillsholder['Leadership']}
                    />
                  </>
                )}
            </TabPane>
            <TabPane tabId="tabs2">
              {this.props.store &&
                this.props.store.skillsholder &&
                this.props.store.skillsholder[
                  'Business and Entreprenuership'
                ] && (
                  <>
                    <SearchOption
                      skills={
                        this.props.store.skillsholder[
                          'Business and Entreprenuership'
                        ]
                      }
                    />
                  </>
                )}
            </TabPane>
            <TabPane tabId="tabs3">
              {this.props.store &&
                this.props.store.skillsholder &&
                this.props.store.skillsholder['Marketing and Sales'] && (
                  <>
                    <SearchOption
                      skills={
                        this.props.store.skillsholder['Marketing and Sales']
                      }
                    />
                  </>
                )}
            </TabPane>
            <TabPane tabId="tabs4">
              {this.props.store &&
                this.props.store.skillsholder &&
                this.props.store.skillsholder['Technical Skills'] && (
                  <>
                    <SearchOption
                      skills={this.props.store.skillsholder['Technical Skills']}
                    />
                  </>
                )}
            </TabPane>
            <TabPane tabId="tabs5">
              {this.props.store &&
                this.props.store.skillsholder &&
                this.props.store.skillsholder['Accounting and Finance'] && (
                  <>
                    <SearchOption
                      skills={
                        this.props.store.skillsholder['Accounting and Finance']
                      }
                    />
                  </>
                )}
            </TabPane>
            <TabPane tabId="tabs6">
              {this.props.store &&
                this.props.store.skillsholder &&
                this.props.store.skillsholder['Legal'] && (
                  <>
                    <SearchOption
                      skills={this.props.store.skillsholder['Legal']}
                    />
                  </>
                )}
            </TabPane>
            <TabPane tabId="tabs7">
              {this.props.store &&
                this.props.store.skillsholder &&
                this.props.store.skillsholder['Health and Wellness'] && (
                  <>
                    <SearchOption
                      skills={
                        this.props.store.skillsholder['Health and Wellness']
                      }
                    />
                  </>
                )}
            </TabPane>
            <TabPane tabId="tabs8">
              {this.props.store &&
                this.props.store.skillsholder &&
                this.props.store.skillsholder['Human Resources'] && (
                  <>
                    <SearchOption
                      skills={this.props.store.skillsholder['Human Resources']}
                    />
                  </>
                )}
            </TabPane>
            <TabPane tabId="tabs9">
              {this.props.store &&
                this.props.store.skillsholder &&
                this.props.store.skillsholder['Education'] && (
                  <>
                    <SearchOption
                      skills={this.props.store.skillsholder['Education']}
                    />
                  </>
                )}
            </TabPane>
            <TabPane tabId="tabs10">
              {this.props.store &&
                this.props.store.skillsholder &&
                this.props.store.skillsholder['Artists and Creatives'] && (
                  <>
                    <SearchOption
                      skills={
                        this.props.store.skillsholder['Artists and Creatives']
                      }
                    />
                  </>
                )}
            </TabPane>
            <TabPane tabId="tabs11">
              {this.props.store &&
                this.props.store.skillsholder &&
                this.props.store.skillsholder['Community Advocacy'] && (
                  <>
                    <SearchOption
                      skills={
                        this.props.store.skillsholder['Community Advocacy']
                      }
                    />
                  </>
                )}
            </TabPane>
            <TabPane tabId="tabs12">
              {this.props.store &&
                this.props.store.skillsholder &&
                this.props.store.skillsholder['Civic Engagement'] && (
                  <>
                    <SearchOption
                      skills={this.props.store.skillsholder['Civic Engagement']}
                    />
                  </>
                )}
            </TabPane>
            <TabPane tabId="tabs13">
              {this.props.store &&
                this.props.store.skillsholder &&
                this.props.store.skillsholder.allSkills && (
                  <>
                    <SearchOption
                      skills={this.props.store.skillsholder.allSkills}
                    />
                  </>
                )}
            </TabPane>
          </TabContent>
          <CardFooter className="bg-white">
            <p style={{ fontFamily: 'lato' }}>Selected Skills:</p>
            {this.props.store.memberskills.map((skill, i) => {
              let color = 'primary';
              if (skill.category_id === 1) {
                color = 'primary';
              } else if (skill.category === 'Business and Entrepreneurship') {
                color = 'info';
              }

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
                <Badge key={skill.id} color={color} pill>
                  <span>
                    <i
                      className="ni ni-fat-remove"
                      onClick={() => this.removeSkill(skill.id)}
                    />
                  </span>
                  {skill.skill}
                </Badge>
              );
            })}
          </CardFooter>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(SkillsWidget);
