import React, { useState } from "react";
import "./App.css";
import AnimeList from "./components/MovieOrSeries-List";
import FilterSearch from "./components/FilterSearch";
import Header from "./components/header";
import SeriesOrMovieDetails from "./components/SeriesOrMovieDetails";

function App() {
	//store info of anime to render
	const [anime, setAnime] = useState<any[]>([]);
	//decide WHICH anime's info should be stored
	const [list, setList] = useState<string[]>(["one piece", "beyblade", "naruto", "digimon", "dragon ball"]);

	const [filterValue, setFilterValue] = useState<string>("series");

	const [detailedSeriesOrMovie, setDetailedSeriesOrMovie] = useState<string>("");

	return (
		<div className="App">
			<Header setList={setList} setAnime={setAnime} setDetailedSeriesOrMovie={setDetailedSeriesOrMovie} />
			<FilterSearch setFilterValue={setFilterValue} />
			<AnimeList
				anime={anime}
				setAnime={setAnime}
				list={list}
				filterValue={filterValue}
				detailedSeriesOrMovie={detailedSeriesOrMovie}
				setDetailedSeriesOrMovie={setDetailedSeriesOrMovie}
			/>
			{detailedSeriesOrMovie ? (
				<SeriesOrMovieDetails detailedSeriesOrMovie={detailedSeriesOrMovie} setDetailedSeriesOrMovie={setDetailedSeriesOrMovie} />
			) : null}
		</div>
	);
}

export default App;
