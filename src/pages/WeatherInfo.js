import React from 'react';

export default function WeatherInfo(props) {
	const temp = props.weather.main.temp;
	const roundedTemp = Math.round(temp);
	return (
		<div className="weather-data">
			<h2>{props.weather.name}</h2>
			<h2>{props.weather.weather[0].description}</h2>
			<h1>
				{roundedTemp}
				{'\u00b0'}F
			</h1>
			<button onClick={() => props.handleFavoriteSubmit()}>
				Add to Favorites
			</button>
		</div>
	);
}
