import React from 'react';

import styles from './SkillPill.module.css';

const SkillPill = ({ skill, onClick }) => {
    return (
        <div className={styles.pill} onClick={() => onClick()}>
            {skill.skill.toUpperCase()}
        </div>
    )
}

export default SkillPill;