import React from 'react';
import './style.css';
import SearchLogo from '../images/search-solid.svg';

const Header: React.FC = () => {
    return(
        <header>
            <h1>Anime Store</h1>
            <div className='filler'></div>
            <span>
                <input placeholder='Search...'/>
                <img src={SearchLogo} alt=''/>
            </span>
        </header>
    )
}

export default Header;