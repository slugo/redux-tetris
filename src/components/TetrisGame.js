
import React from 'react';
import Menu from './Menu.js';
import GamePanel from './GamePanel.js';
import gameConstants from '../gameConstants.js';

const { panelWidth, panelHeight } = gameConstants;

const TetrisGame = () => (
	<div>
		<GamePanel width={panelWidth} height={panelHeight}>
			<Menu />
		</GamePanel>
	</div>
);

export default TetrisGame;

