import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import initialState from '../config/initialState.config';
import configureStore from '../config/store.config';
import AppLayout from './App.layout';

const AppRouter = () => (
	<Provider store={configureStore({ initialState })}>
		<Router history={browserHistory}>
			<Route path="/" component={AppLayout}>
			</Route>
		</Router>
	</Provider>
);

export default AppRouter;