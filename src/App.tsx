import React from 'react';
import './App.css';
import AnimeList from './components/Anime-List';
import Header from './components/header';


function App() {
  return (
    <div className="App">
      <Header/>
      <AnimeList/>
    </div>
  );
}

export default App;
