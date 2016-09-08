import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import GameField from './GameField.js';
import gameConstants from '../gameConstants.js';
import Menu from './Menu.js';
import CurrentGameInfo from '../containers/CurrentGameInfo.js';
import Banner from './Banner.js';

const { fieldWidth, fieldHeight } = gameConstants;

const TetrisGame = () => (
	<div>
		<div style={{backgroundColor:'grey'}} >
			<MuiThemeProvider>
				<Menu />
			</MuiThemeProvider>
		</div>
		<div>
			<GameField width={fieldWidth} height={fieldHeight} />
			<MuiThemeProvider>
				<CurrentGameInfo />
			</MuiThemeProvider>
		</div>
	</div>
);

export default TetrisGame;




