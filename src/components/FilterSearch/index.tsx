import React from 'react';
import './style.css'

const FilterSearch: React.FC = () => {
    return(
        <div className='searchFilter'>
                Search for: 
                <select>
                    <option>movies and series</option>
                    <option>movies only</option>
                    <option>series only</option>
                </select>
            </div>
    )
}

export default FilterSearch;