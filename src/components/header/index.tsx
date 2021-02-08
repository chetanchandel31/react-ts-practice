import React, { useState } from 'react';
import './style.css';
import SearchLogo from '../images/search-solid.svg';

const Header: React.FC<any> = ({setList, setAnime}) => {
    const [inputVal, setInputVal] = useState<string>('');

    const handleSearch: () => void = () => {
        setAnime([]);
        setList([inputVal]);        
    }

    return(
        <header>
            <h2>Anime Store</h2>
            <div className='filler'></div>
            <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                handleSearch();
                }}>
                <span>
                    <input placeholder='Search...'
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => setInputVal(e.target.value)}/>
                    <img src={SearchLogo} alt='' onClick={handleSearch}/>
                </span>
            </form>
        </header>
    )
}

export default Header;