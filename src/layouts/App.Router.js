import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import initialState from '../config/initialState.config';
import configureStore from '../config/store.config';
import AppLayout from './App.layout';

import Gallery from '../components/containers/Gallery/Gallery';
import VRPanorama from '../components/containers/VRPanorama/VRPanorama';

const AppRouter = () => (
	<Provider store={configureStore({ initialState })}>
		<Router history={browserHistory}>
			<Route path="/" component={AppLayout}>
				<IndexRoute component={Gallery} />
				<Route path="/:name" component={VRPanorama} />
				<Route path="*" component={Gallery} />
			</Route>
		</Router>
	</Provider>
);

export default AppRouter;