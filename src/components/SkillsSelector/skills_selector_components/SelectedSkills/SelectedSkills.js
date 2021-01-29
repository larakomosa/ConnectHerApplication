import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SkillPill from '../SkillPill/SkillPill';

const SelectedSkills = () => {
    const selectedSkills = useSelector(state => state.memberskills);
    const dispatch = useDispatch();
    const removeSkill = (id) => {
        dispatch({type: 'REMOVE_SKILL', payload: id});
    }

    return (
        <div>
            {selectedSkills.map(skill => <SkillPill key={skill.id} skill={skill} onClick={() => removeSkill(skill.id)} />)}
        </div>
    )
}

export default SelectedSkills;