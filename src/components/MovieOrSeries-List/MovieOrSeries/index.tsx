import React from "react";
import "./style.css";

type AnimeProps = {
	Title: string;
	Year: string;
	Poster: string;
	id: string;
	setDetailedSeriesOrMovie:React.Dispatch<React.SetStateAction<string>>;
};

const Anime: React.FC<AnimeProps> = ({ Title, Year, Poster, id, setDetailedSeriesOrMovie }) => {
	return (
		<div className="anime" onClick={() => setDetailedSeriesOrMovie(id)}>
			<h3>{Title}</h3>
			year: {Year}
			<br />
			<img src={Poster} alt="couldn't load from API" />
		</div>
	);
};

export default Anime;
