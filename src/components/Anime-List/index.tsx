import React, { useEffect } from 'react';
import Anime from './Anime';
import './style.css'

const AnimeList: React.FC = () => {
    const [anime, setAnime] = React.useState<any[]>([]);

    useEffect(
        () => {
            const list: string[] = ['naruto', 'dragon ball',/* 'one piece', 'beyblade', 'digimon'*/];
            list.forEach(animeName => {
            fetch(`http://www.omdbapi.com/?apikey=3c9e3d41&s=${encodeURIComponent(animeName)}&type=series`)
            .then(res => res.json())
            .then(res => {
                let animeArr: any = res.Search;
                console.log(res);
                setAnime(prevAnime => [...prevAnime, ...animeArr]);
            });
            })
        }, []
    )

    return(
            <div className ='animeList'>
                {anime.map(animeObj => {
                    if (animeObj && animeObj.Type === 'series') {
                        let animeComp = <Anime key={animeObj.imdbID}
                        Title={animeObj.Title}
                        Poster={animeObj.Poster}
                        Year={animeObj.Year}/>
                        
                        return animeComp
                    } else return null
                })}
            </div>
    )
}

export default AnimeList;