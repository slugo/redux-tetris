import React from 'react';
import { Layer, Stage } from 'react-konva';
import { connect } from 'react-redux';
import PausedBanner from './PausedBanner.js';
import CurrentTetromino from '../containers/CurrentTetromino.js';
import ActiveTetrominos from '../containers/ActiveTetrominos.js';
import gameConstants from '../gameConstants.js';
import style from '../styles/styles.css';

const { fieldHeight, fieldWidth } = gameConstants;

let GameField = ({ isPlaying, isPaused }) => {
	if (isPlaying) {
		return (
			<div className={style.gameField}>
				<Stage width={fieldWidth} height={fieldHeight}>
					<Layer>
						<CurrentTetromino />
						<ActiveTetrominos />
					</Layer>
				</Stage>
				{ isPaused ? <PausedBanner /> : null}
			</div>
		);
	}
	return null;
};

const mapStateToProps = (state) => ({
	isPlaying: state.isPlaying,
	isPaused: state.isPaused,
});

GameField = connect(mapStateToProps)(GameField);

export default GameField;