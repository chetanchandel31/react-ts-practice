import React, { useEffect } from 'react';

const AnimeList: React.FC = () => {
    const list: string[] = ['naruto', 'dragon ball', 'one piece', 'beyblade', 'digimon'];
    useEffect(
        () => {
            const promises: any[] = list.map(anime => {
                return fetch(`http://www.omdbapi.com/?apikey=1878caed&s=${encodeURIComponent(anime)}&type=series`)
                .then(res => res.json())
                .then(res => {
                    let anime: any = res.Search;
                    console.log(anime)
                });
            })
        }
    )

    return(
        <>
            <h1>anime list</h1>
            <h2>{list}</h2>
        </>
    )
}

export default AnimeList;