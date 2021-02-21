import React, { useEffect, useState } from "react";

type SeriesOrMovieDetailsProps = {
	detailedSeriesOrMovie: string;
	setDetailedSeriesOrMovie: React.Dispatch<React.SetStateAction<string>>;
};

const SeriesOrMovieDetails: React.FC<SeriesOrMovieDetailsProps> = ({ detailedSeriesOrMovie, setDetailedSeriesOrMovie }) => {
	const [movieOrSeriesInfo, setMovieOrSeriesInfo] = useState<any>({});

	useEffect(() => {
		const URL = `https://www.omdbapi.com/?apikey=3c9e3d41&i=${detailedSeriesOrMovie}&plot=full`;

		fetch(URL)
			.then(res => res.json())
			.then(res => {
				setMovieOrSeriesInfo(res);
				console.log(res);
			});
	}, [detailedSeriesOrMovie]);

	return (
		<>
			<div onClick={() => setDetailedSeriesOrMovie("")}>x</div>

			<h1>{movieOrSeriesInfo.Title}</h1>
			
			<img src={movieOrSeriesInfo.Poster} alt='' />
			
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
		</>
	);
};

export default SeriesOrMovieDetails;
