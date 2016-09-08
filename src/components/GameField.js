import React from 'react';
import { Layer, Stage } from 'react-konva';
import { connect } from 'react-redux';
import Banner from './Banner.js';
import CurrentTetromino from '../containers/CurrentTetromino.js';
import ActiveTetrominos from '../containers/ActiveTetrominos.js';
import gameConstants from '../gameConstants.js';
import style from '../styles/styles.css';

const { fieldHeight, fieldWidth } = gameConstants;

let GameField = ({ isPlaying, isPaused, isGameOver }) => {
	if (isPlaying) {
		return (
			<div className={style.gameField}>
				<Stage width={fieldWidth} height={fieldHeight}>
					<Layer>
						<CurrentTetromino />
						<ActiveTetrominos />
					</Layer>
				</Stage>
				{ isPaused ? <Banner label="PAUSED" color="black" /> : null}
				{ isGameOver ? <Banner label="GAME OVER" color="red" /> : null}
			</div>
		);
	}
	return null;
};

const mapStateToProps = (state) => ({
	isPlaying: state.isPlaying,
	isPaused: state.isPaused,
	isGameOver: state.isGameOver,
});

GameField = connect(mapStateToProps)(GameField);

export default GameField;