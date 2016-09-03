import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import GameField from './GameField.js';
import gameConstants from '../gameConstants.js';
import Menu from './Menu.js';
import CurrentGameInfo from '../containers/CurrentGameInfo.js';

const { fieldWidth, fieldHeight } = gameConstants;

const TetrisGame = () => (
	<div>
		<MuiThemeProvider>
			<Menu />
		</MuiThemeProvider>
		<GameField width={fieldWidth} height={fieldHeight} />
		<MuiThemeProvider>
			<CurrentGameInfo />
		</MuiThemeProvider>
	</div>
);

export default TetrisGame;




