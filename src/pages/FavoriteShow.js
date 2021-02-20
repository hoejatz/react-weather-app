import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function FavoriteShow(props) {
	const [favorite, setFavorite] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(
					`/api/favLocations/${props.match.params.id}`
				);
				const data = await response.json();
				setFavorite(data);
				console.log(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<div>
			<h2>{favorite.name ? favorite.name : ''}</h2>
		</div>
	);
}
