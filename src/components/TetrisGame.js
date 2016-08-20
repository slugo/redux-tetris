import React from 'react';
import GamePanel from './GamePanel.js';
import gameConstants from '../gameConstants.js';

const { panelWidth, panelHeight } = gameConstants;

const TetrisGame = () => (
	<div>
		<GamePanel width={panelWidth} height={panelHeight} />
	</div>
);

export default TetrisGame;




