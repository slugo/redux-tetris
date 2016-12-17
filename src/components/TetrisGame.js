import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import GameField from './GameField.js';
import gameConstants from '../gameConstants.js';
import MenuContainer from '../containers/MenuContainer.js';
import CurrentGameInfo from '../containers/CurrentGameInfo.js';

injectTapEventPlugin();

const { fieldWidth, fieldHeight } = gameConstants;

const TetrisGame = () => (
	<div>
		<div>
			<MenuContainer />
		</div>
		<div style={{position: 'relative'}}>
			<GameField width={fieldWidth} height={fieldHeight} />
			<MuiThemeProvider>
				<CurrentGameInfo />
			</MuiThemeProvider>
		</div>
	</div>
);

export default TetrisGame;




