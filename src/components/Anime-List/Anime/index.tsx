import React from 'react';

const Anime: React.FC<any> = (props) => {
    return(
        <div>
            <h1>{props.Title}</h1>
            year: {props.Year}<br/>
            <img src={props.Poster} alt="couldn't load from API"/>
        </div>
    )
}

export default Anime;