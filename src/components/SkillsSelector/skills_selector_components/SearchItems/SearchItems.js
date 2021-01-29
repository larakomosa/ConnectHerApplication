import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import SkillPill from '../SkillPill/SkillPill';

import styles from './SearchItems.module.css';

const SearchItems = ({ items, searchTerm, property }) => {
    // const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        // update list rendered based on current state of search
        const results = items.filter(item => {
            return item[property].toLowerCase().includes(searchTerm.toLowerCase()) ||
            item[property].includes(searchTerm.toLowerCase());
        });
        setSearchResults(results);
    }, [items, property, searchTerm]);

    const dispatch = useDispatch();

    const addSkill = (item) => {
        console.log(item);
        dispatch({type: 'ADD_SKILL', payload: item});
    }
    return (
        <div className={searchTerm ? styles['search-active'] : styles['search-inactive']}>
            {searchTerm ? searchResults.map(item => {
                return <SkillPill key={item.id} skill={item} onClick={() => addSkill(item)}/>
            }) : null}
        </div>
    )
}

export default SearchItems;