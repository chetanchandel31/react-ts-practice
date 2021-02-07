import React from 'react';
import './style.css'

const Anime: React.FC<any> = (props) => {
    return(
        <div className = 'anime'>
            <h3>{props.Title}</h3>
            year: {props.Year}<br/>
            <img src={props.Poster} alt="couldn't load from API"/>
        </div>
    )
}

export default Anime;