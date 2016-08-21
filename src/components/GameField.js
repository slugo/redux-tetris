import React from 'react';
import { Layer, Stage } from 'react-konva';
import { connect } from 'react-redux';
import CurrentTetromino from '../containers/CurrentTetromino.js';
import TetrominosList from '../containers/ActiveTetrominos.js';
import gameConstants from '../gameConstants.js';

const { fieldHeight, fieldWidth } = gameConstants;

let GameField = ({ isPlaying }) => {
	//only render when isPlaying;
	const fieldStyle = {
		borderStyle: 'solid',
		width: fieldWidth,
		height: fieldHeight,
		display: isPlaying ? 'block' : 'none',
	};

	return (
		<div style={fieldStyle}>
			<Stage width={(fieldWidth * 60) / 100} height={fieldHeight}>
				<Layer>
					<CurrentTetromino />
					<TetrominosList />
				</Layer>
			</Stage>
		</div>
	);
};

const mapStateToProps = (state) => ({
	isPlaying: state.isPlaying,
});

GameField = connect(mapStateToProps)(GameField);

export default GameField;



