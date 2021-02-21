import React, { useEffect } from "react";
import Anime from "./Anime";
import "./style.css";
import SadPikachu from "../images/tenor.gif";
import WaitingShinchan from "../images/shinchan.gif";

type AnimeObj = {
	Type: string;
	imdbID: string;
	Title: string;
	Poster: string;
	Year: string;
};

type AnimeListProps = {
	anime: AnimeObj[];
	setAnime: React.Dispatch<React.SetStateAction<any[]>>;
	list: string[];
	filterValue: string;
	detailedSeriesOrMovie: string;
	setDetailedSeriesOrMovie:React.Dispatch<React.SetStateAction<string>>;
};

const AnimeList: React.FC<AnimeListProps> = ({ anime, setAnime, list, filterValue, detailedSeriesOrMovie, setDetailedSeriesOrMovie }) => {
	const [error, setError] = React.useState<boolean>(false);
	const [loading, setLoading] = React.useState<boolean>(true);

	useEffect(() => {
		setLoading(true);
		setError(false);
		setAnime([]);

		setTimeout(() => {
			list.forEach((animeName: string) => {
				let ourURL: string = `https://www.omdbapi.com/?apikey=3c9e3d41&s=${encodeURIComponent(animeName)}&type=${filterValue}`;

				fetch(ourURL)
					.then(res => res.json())
					.then(res => {
						let animeArr: AnimeObj[] = res.Search;
						if (!animeArr) return setError(true);

						setAnime((prevAnime: AnimeObj[]) => {
							let combinedArr = [...prevAnime, ...animeArr];
							let filteredArr: AnimeObj[] = [];
							combinedArr.forEach(c => {
								let foundOrNot: number = filteredArr.findIndex(f => f.imdbID === c.imdbID);
								if (foundOrNot === -1) filteredArr.push(c);
							});
							return filteredArr;
						});
					});
			});

			setLoading(false);
		}, 1500);

		// eslint-disable-next-line
	}, [list, filterValue]);

	let loader: JSX.Element = (
		<div className="loader">
			<img src={WaitingShinchan} alt="" className="waitingShinchan" />
			<h1>Loading...</h1>
		</div>
	);

	let animeList: JSX.Element = (
		<div className={detailedSeriesOrMovie? 'invisible': 'animeList'}>
			{anime.map((animeObj: AnimeObj) => {
				if (animeObj) {
					let animeComp = <Anime key={animeObj.imdbID} Title={animeObj.Title} Poster={animeObj.Poster} Year={animeObj.Year} id={animeObj.imdbID} setDetailedSeriesOrMovie={setDetailedSeriesOrMovie} />;

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

	return <>{!loading && !error ? animeList : loading ? loader : errorMessage}</>;
};

export default AnimeList;
