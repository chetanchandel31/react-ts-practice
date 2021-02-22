import React, { useEffect, useState } from "react";
import "./style.css";

type SeriesOrMovieDetailsProps = {
	detailedSeriesOrMovie: string;
	setDetailedSeriesOrMovie: React.Dispatch<React.SetStateAction<string>>;
};

type MovieOrSeriesObj = {
	[key: string]: any;
}

const SeriesOrMovieDetails: React.FC<SeriesOrMovieDetailsProps> = ({ detailedSeriesOrMovie, setDetailedSeriesOrMovie }) => {
	const [movieOrSeriesInfo, setMovieOrSeriesInfo] = useState<MovieOrSeriesObj>({});
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const URL = `https://www.omdbapi.com/?apikey=3c9e3d41&i=${detailedSeriesOrMovie}&plot=full`;

		fetch(URL)
			.then(res => res.json())
			.then(res => {
				setMovieOrSeriesInfo(res);
				setLoading(false);
				// console.log(res);
			});
	}, [detailedSeriesOrMovie]);

	if (loading) return <div className="animatedLoader"></div>

	return (
		<div className="seriesOrMovieDetails">
			<div className="crossBar">
				<span onClick={() => setDetailedSeriesOrMovie("")}>x</span>
			</div>

			<h1>{movieOrSeriesInfo.Title}</h1>

			<img src={movieOrSeriesInfo.Poster} alt="" />

			<p>
				<strong>Release date: </strong>
				{movieOrSeriesInfo.Released}
			</p>

			<p>
				<strong>imdb Rating: </strong>
				{movieOrSeriesInfo.imdbRating}
			</p>

			<p>
				<strong>Genre: </strong>
				{movieOrSeriesInfo.Genre}
			</p>

			<p>
				<strong>Awards: </strong>
				{movieOrSeriesInfo.Awards}
			</p>

			<p>
				<strong>Country: </strong>
				{movieOrSeriesInfo.Country}
			</p>

			<p>
				<strong>Writer: </strong>
				{movieOrSeriesInfo.Writer}
			</p>

			<p>
				<strong>Actors/Voice Actors: </strong>
				{movieOrSeriesInfo.Actors}
			</p>

			<p>
				<strong>Plot: </strong>
				{movieOrSeriesInfo.Plot}
			</p>
		</div>
	);
};

export default SeriesOrMovieDetails;
