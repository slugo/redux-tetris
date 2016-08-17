
import React from 'react';
import { Layer, Stage } from 'react-konva';
import Tetromino from './Tetromino.js';
import gameConstants from '../gameConstants.js';

const { fieldHeight, fieldWidth } = gameConstants;

const GameField = () => {
	const fieldStyle = {
		borderStyle: 'solid',
		width: fieldWidth,
		height: fieldHeight,
	};

	return (
		<div style={fieldStyle}>
			<Stage width={(fieldWidth * 60) / 100} height={fieldHeight}>
				<Layer />
			</Stage>
		</div>
	);
};

export default GameField;

