import React, { useState, useEffect } from 'react';
import WeatherInfo from './WeatherInfo';
import config from '../config';
// import { Redirect } from 'react-router-dom';

// const apiKey = process.env.API_KEY;

export default function App(props) {
	const [weather, setWeather] = useState({});
	const [favorite, setFavorite] = useState([]);
	// const cityInput = useRef(null);
	const [query, updateQuery] = useState({
		baseURL: 'http://api.openweathermap.org/data/2.5/weather?q=',
		cityName: '',
		key: `&units=imperial&appid=${config.key}`,
		searchURL: ''
	});

	// console.log(1111111, process.env.API_KEY);

	useEffect(() => {
		(async () => {
			if (query.searchURL) {
				try {
					const response = await fetch(query.searchURL);
					const data = await response.json();
					await setWeather(data);
				} catch (error) {
					console.error(error);
				} finally {
					updateQuery({
						baseURL: 'http://api.openweathermap.org/data/2.5/weather?q=',
						cityName: '',
						// key: '&appid=' + apiKey,
						key: '&units=imperial&appid=24684a47074deb079fdf0abc74cbd14b',
						searchURL: ''
					});
				}
			}
		})();
	}, [query]);

	const handleQueryChange = event => {
		updateQuery({
			...query,
			...{
				[event.target.id]: event.target.value
			}
		});
	};

	const handleQuerySubmit = event => {
		event.preventDefault();
		updateQuery({
			...query,
			searchURL: query.baseURL + query.cityName + query.key
		});
	};

	const handleFavoriteSubmit = async event => {
		const cityNameValue = weather.name;
		const temperatureValue = weather.main.temp;
		const idValue = weather.id;

		try {
			const response = await fetch('/api/favLocations', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: cityNameValue,
					// temp: temperatureValue,
					id: idValue
				})
			});
			const data = await response.json();
			data.setFavorite([...favorite, data]);
			// <Redirect to="/favLocations" />;
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="Page-wrapper">
			<form onSubmit={handleQuerySubmit}>
				<input
					id="cityName"
					type="text"
					value={query.cityName}
					placeholder="Search for City"
					// ref={cityInput}
					onChange={handleQueryChange}
				/>
				<input type="submit" value="Search" />
			</form>
			<div>
				{Object.keys(weather).length ? (
					<WeatherInfo
						weather={weather}
						handleFavoriteSubmit={handleFavoriteSubmit}
					/>
				) : (
					''
				)}
			</div>
		</div>
	);
}
