import React, { useEffect } from 'react';
import Anime from './Anime';
import './style.css';
import SadPikachu from '../images/tenor.gif';

const AnimeList: React.FC<any> = ({anime, setAnime, list}) => {
    const [error, setError] = React.useState<boolean>(false);

    useEffect(
        () => {
            // const list: string[] = ['naruto', 'dragon ball',/* 'one piece', 'beyblade', 'digimon'*/];
            list.forEach((animeName: any) => {
            fetch(`http://www.omdbapi.com/?apikey=3c9e3d41&s=${encodeURIComponent(animeName)}&type=series`)
            .then(res => res.json())
            .then(res => {
                let animeArr: any = res.Search;
                if (!animeArr) return setError(true);
                setError(false);
                setAnime((prevAnime: any) => [...prevAnime, ...animeArr]);
            });
            })
        }, [setAnime, list]//why
    )

    if(error === false) {
        return(
            <div className ='animeList'>
                {anime.map((animeObj: { Type: string; imdbID: string | number | null | undefined; Title: string; Poster: string; Year: string; }) => {
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
    } else return (
        <div className='errorMessage'>
            <img src={SadPikachu} alt='' className='sadPikachu' />
            <h4>couldn't find any results that match your search</h4>
        </div>
    )
        
}

export default AnimeList;