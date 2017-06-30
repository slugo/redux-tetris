import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk';
import TetrisGame from './components/TetrisGame';
import TetrisApp from './reducers/index.js';

import 'normalize.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	TetrisApp,
	composeEnhancers(
		applyMiddleware(ReduxThunk)
	)
);

const App = () => (
	<Provider store={store}>
		<div>
			<TetrisGame />
		</div>
	</Provider>
);

ReactDOM.render(<App />, document.getElementById('react-app'));

