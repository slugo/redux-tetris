
import React from 'react';
import { Layer, Stage } from 'react-konva';
import { connect } from 'react-redux';
import CurrentTetromino from '../containers/CurrentTetromino.js';
import ActiveTetrominos from '../containers/ActiveTetrominos.js';
import gameConstants from '../gameConstants.js';

const { fieldHeight, fieldWidth } = gameConstants;

let GameField = ({ isPlaying }) => {
	//only render when isPlaying;
	const fieldStyle = {
		borderStyle: 'solid',
		width: fieldWidth,
		height: fieldHeight,
	};

	if (isPlaying) {
		return (
			<div style={fieldStyle}>
				<Stage width={fieldWidth} height={fieldHeight}>
					<Layer>
						<CurrentTetromino />
						<ActiveTetrominos />
					</Layer>
				</Stage>
			</div>
		);
	}
	return null;
};

const mapStateToProps = (state) => ({
	isPlaying: state.isPlaying,
});

GameField = connect(mapStateToProps)(GameField);

export default GameField;






