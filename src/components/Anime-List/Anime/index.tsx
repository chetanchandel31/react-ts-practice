import React from 'react';
import './style.css'

type AnimeProps = {
    Title: string;
    Year: string;
    Poster: string;
}

const Anime: React.FC<AnimeProps> = ({Title, Year, Poster}) => {
    return(
        <div className = 'anime'>
            <h3>{Title}</h3>
            year: {Year}<br/>
            <img src={Poster} alt="couldn't load from API"/>
        </div>
    )
}

export default Anime;