import React from 'react';
import './style.css'

const FilterSearch: React.FC<any> = ({setFilterValue}) => {
    const handleChange = (target: EventTarget & HTMLSelectElement) => {
        if (target.value === 'movies only'){
            setFilterValue('movie')
        } else if (target.value === 'series only'){
            setFilterValue('series')
        } else{
            setFilterValue('');
        }
    }

    return(
        <div className='searchFilter'>
                Search for: 
                <select onChange={({target}) => handleChange(target)}>
                    <option>series only</option>
                    <option>movies only</option>
                    <option>movies and series</option>
                </select>
            </div>
    )
}

export default FilterSearch;