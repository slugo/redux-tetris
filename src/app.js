import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk';
import DevTools from './containers/DevTools.js';
import TetrisGame from './components/TetrisGame';
import TetrisApp from './reducers/index.js';

const enhancer = compose(
	applyMiddleware(ReduxThunk),
	DevTools.instrument()
);
const store = createStore(
	TetrisApp,
	enhancer
);

const App = () => (
	<Provider store={store}>
		<div>
			<TetrisGame />
			<DevTools />
		</div>
	</Provider>
);

ReactDOM.render(<App />, document.getElementById('react-app'));




