import React from 'react';
import { Layer, Stage } from 'react-konva';
import { connect } from 'react-redux';
import CurrentTetromino from '../containers/CurrentTetromino.js';
import ActiveTetrominos from '../containers/ActiveTetrominos.js';
import gameConstants from '../gameConstants.js';
import style from '../styles/styles.css';

const { fieldHeight, fieldWidth } = gameConstants;

let GameField = ({ isPlaying }) => {
	if (isPlaying) {
		return (
			<div className={style.gameField}>
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

GameField.propTypes = {
	isPlaying: React.PropTypes.bool,
}

export default GameField;






