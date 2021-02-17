import React, { useState } from 'react';
import './App.css';
import AnimeList from './components/Anime-List';
import FilterSearch from './components/FilterSearch';
import Header from './components/header';


function App() {
  //store info of anime to render
  const [anime, setAnime] = useState<any[]>([]);
  //decide WHICH anime's info should be stored
  const [list, setList] = useState<string[]>(['one piece', 'beyblade','naruto', 'digimon', 'dragon ball'])

  const [filterValue, setFilterValue] = useState<string>('series');
  return (
    <div className="App">
      <Header setList={setList} setAnime={setAnime}/>
      <FilterSearch setFilterValue={setFilterValue} />
      <AnimeList anime={anime} setAnime={setAnime} list={list} filterValue={filterValue} />
    </div>
  );
}

export default App;