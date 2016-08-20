import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import TetrisGame from './components/TetrisGame';
import TetrisApp from './reducers/index.js';

const store = createStore(TetrisApp);

const App = () => (
	<Provider store={store}>
		<TetrisGame />
	</Provider>
);

ReactDOM.render(<App />, document.getElementById('react-app'));




