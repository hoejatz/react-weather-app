import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Delete from '../components/Delete';

export default function Favorites(props) {
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/favLocations');
				const data = await response.json();
				setFavorites(data);
				console.log(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<div>
			{favorites.map(favorite => {
				return (
					<div key={favorite._id}>
						<h2>
							<Link to={`/${favorite._id}`}>{favorite.name}</Link>
							<Delete></Delete>
						</h2>
					</div>
				);
			})}
		</div>
	);
}
