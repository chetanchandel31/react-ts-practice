import React, { useEffect } from "react";
import MovieOrSeriesTile from "./MovieOrSeries";
import "./style.css";
import SadPikachu from "../images/tenor.gif";

type MovieOrSeriesObj = {
	Type: string;
	imdbID: string;
	Title: string;
	Poster: string;
	Year: string;
};

type MovieOrSeriesListProps = {
	movieOrSeries: MovieOrSeriesObj[];
	setMovieOrSeries: React.Dispatch<React.SetStateAction<any[]>>;
	list: string[];
	filterValue: string;
	detailedSeriesOrMovie: string;
	setDetailedSeriesOrMovie: React.Dispatch<React.SetStateAction<string>>;
};

const MovieOrSeriesList: React.FC<MovieOrSeriesListProps> = ({ movieOrSeries, setMovieOrSeries, list, filterValue, detailedSeriesOrMovie, setDetailedSeriesOrMovie }) => {
	const [error, setError] = React.useState<boolean>(false);
	const [loading, setLoading] = React.useState<boolean>(true);

	useEffect(() => {
		setLoading(true);
		setError(false);
		setMovieOrSeries([]);

		list.forEach((searchQuery: string) => {
			let ourURL: string = `https://www.omdbapi.com/?apikey=3c9e3d41&s=${encodeURIComponent(searchQuery)}&type=${filterValue}`;

			fetch(ourURL)
				.then(res => res.json())
				.then(res => {
					let movieOrSeriesArr: MovieOrSeriesObj[] = res.Search;
					if (!movieOrSeriesArr) return setError(true);

					setMovieOrSeries((preArr: MovieOrSeriesObj[]) => {
						let combinedArr = [...preArr, ...movieOrSeriesArr];
						let filteredArr: MovieOrSeriesObj[] = [];
						combinedArr.forEach(c => {
							let foundOrNot: number = filteredArr.findIndex(f => f.imdbID === c.imdbID);
							if (foundOrNot === -1) filteredArr.push(c);
						});
						return filteredArr;
					});
				})
				.then(() => setLoading(false));
		});
		// eslint-disable-next-line
	}, [list, filterValue]);

	let loader: JSX.Element = <div className="animatedLoader"></div>;

	let animeList: JSX.Element = (
		<div className="movieOrSeriesList">
			{movieOrSeries.map((movieOrSeriesObj: MovieOrSeriesObj) => {
				if (movieOrSeriesObj) {
					let animeComp = (
						<MovieOrSeriesTile
							key={movieOrSeriesObj.imdbID}
							Title={movieOrSeriesObj.Title}
							Poster={movieOrSeriesObj.Poster}
							Year={movieOrSeriesObj.Year}
							id={movieOrSeriesObj.imdbID}
							setDetailedSeriesOrMovie={setDetailedSeriesOrMovie}
						/>
					);

					return animeComp;
				} else return null;
			})}
		</div>
	);

	let errorMessage: JSX.Element = (
		<div className="errorMessage">
			<img src={SadPikachu} alt="" className="sadPikachu" />
			<h4>couldn't find any results that match your search</h4>
		</div>
	);

	return <div className={detailedSeriesOrMovie ? "invisible" : ""}>{!loading && !error ? animeList : loading ? loader : errorMessage}</div>;
};

export default MovieOrSeriesList;
