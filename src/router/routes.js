import React from 'react';
import App from '../pages/App';
import Favorites from '../pages/Favorites';
import FavoriteShow from '../pages/FavoriteShow';

const routes = [
	{
		Component: Favorites,
		key: 'Favorites',
		path: '/favlocations'
	},
	{
		Component: FavoriteShow,
		key: 'FavoriteShow',
		path: '/:id'
	},
	{
		Component: App,
		key: 'App',
		path: '/'
	}
];

export default routes;
