import React, { Component } from 'react';
import styles from './CategoryPanel.module.css';

class CategoryPanel extends Component {
    render() {
        const { category, activeTab } = this.props;
        return (
            <>
                <div
                onClick={() => this.props.getActiveTab(category)}
                className={activeTab === category ? styles.isActive : styles.categoryHeading}>
                    <p>{category}</p>
                </div>
            </>
        )
    }
}

export default CategoryPanel;