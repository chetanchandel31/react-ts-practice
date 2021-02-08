import React, { useState } from 'react';
import './App.css';
import AnimeList from './components/Anime-List';
import Header from './components/header';


function App() {
  //store info of anime to render
  const [anime, setAnime] = useState<any[]>([]);
  //decide WHICH anime's info should be stored
  const [list, setList] = useState<string[]>(['one piece', 'beyblade','naruto', 'digimon', 'dragon ball'])

  return (
    <div className="App">
      <Header setList={setList} setAnime={setAnime}/>
      <AnimeList anime={anime} setAnime={setAnime} list={list} />
    </div>
  );
}

export default App;