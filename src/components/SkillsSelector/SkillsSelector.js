import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './SkillsSelector.module.css';
import ModalBox from '../ModalBox/ModalBox';

// Custom Components
import SearchItems from './skills_selector_components/SearchItems/SearchItems';
import SelectedSkills from './skills_selector_components/SelectedSkills/SelectedSkills';
import style_list from '../../styles/list';
import function_list from '../../functions/list';
import SkillsWidget from '../SkillsWidget/SkillsWidget';

const SkillsSelector = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const skills = useSelector((state) => state.skillsholder);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'GET_CATEGORIES' });
    dispatch({ type: 'GET_SKILLS' });
    dispatch({ type: 'GET_ALL_SKILLS' });
  }, [dispatch]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  let allSkills = skills && skills.allSkills;

  let padding = function_list.registrationPadding({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  return (
    <div>
      <div style={{ ...style_list.register.form_base, padding }}>
        <div style={{ padding: '5px' }}>
          <h1
            style={{
              display: 'inline-block',
              fontFamily: 'cabin',
              color: '#111111d0',
              marginTop: 8,
              paddingLeft: 5,
            }}
          >
            Skills:
          </h1>
          <SelectedSkills />
          <ModalBox
            component={
              <>
                {/* <div className={styles.searchBar}>
                  <input
                    type="text"
                    placeholder="Search for skills"
                    onChange={handleSearch}
                  />
                </div> */}
                {/* <div className={styles.container}>
                  {skills && allSkills && (
                    <SearchItems
                      items={allSkills}
                      searchTerm={searchTerm}
                      property="skill"
                    />
                  )}
                  <p>
                    Select as many skills as you'd like! Try searching for
                    terms.
                  </p>

                  <p>Example: "Public Speaking"</p>
                </div> */}
                {/* <SelectedSkills /> */}
                <SkillsWidget />
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SkillsSelector;
