import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import { connect } from 'react-redux';
import { Layer, Stage } from 'react-konva';
import style from '../styles/styles.css';
import NextTetromino from '../containers/NextTetromino.js';
import { changePauseState } from '../actions/index.js';

let GameInfo = ({points, clearedLines, nextTetromino, isPlaying, isPaused, isGameOver, dispatch}) => {
	const buttonStyle = {
		margin: '20% 0',
	};
	if (isPlaying) {
		return (
			<div className={style.gameInfo}>
				<RaisedButton
					label={isPaused ? 'UNPAUSE' : 'PAUSE'}
					style={buttonStyle}
					primary
					onClick={() => dispatch(changePauseState())}
					disabled={isGameOver}
				/>
				<div className={style.scorePanel}>
					<h2>Next Shape</h2>
					<Stage width={250} height={100}>
						<Layer>
							<NextTetromino />
						</Layer>
					</Stage>
				</div>
				<div className={style.scorePanel}>
					<h2>Score</h2>
					<span className={style.scoreInfo}>{points}</span>
					<h2>Lines</h2>
					<span className={style.scoreInfo}>{clearedLines}</span>
				</div>
			</div>
		);
	}
	return null;
};

const mapStateToProps = ({ gameStatus }) => ({
	isPlaying: gameStatus !== 'IDLE',
	isPaused: gameStatus === 'PAUSED',
	isGameOver: gameStatus === 'GAME_OVER',
});

GameInfo = connect(mapStateToProps)(GameInfo);

export default GameInfo;



