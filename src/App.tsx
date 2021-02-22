import React, { useState } from "react";
import "./App.css";
import MovieOrSeriesList from "./components/MovieOrSeries-List";
import FilterSearch from "./components/FilterSearch";
import Header from "./components/header";
import SeriesOrMovieDetails from "./components/SeriesOrMovieDetails";

function App() {
	//store info of movie/series to render
	const [movieOrSeries, setMovieOrSeries] = useState<any[]>([]);
	//decide WHICH movie/series's info should be stored
	const [list, setList] = useState<string[]>(["one piece", "beyblade", "naruto", "digimon", "dragon ball"]);

	const [filterValue, setFilterValue] = useState<string>("series");

	const [detailedSeriesOrMovie, setDetailedSeriesOrMovie] = useState<string>("");

	return (
		<div className="App">
			<Header setList={setList} setMovieOrSeries={setMovieOrSeries} setDetailedSeriesOrMovie={setDetailedSeriesOrMovie} />
			<FilterSearch setFilterValue={setFilterValue} />
			<MovieOrSeriesList
				movieOrSeries={movieOrSeries}
				setMovieOrSeries={setMovieOrSeries}
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
