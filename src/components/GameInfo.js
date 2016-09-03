import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import { connect } from 'react-redux';
import { Layer, Stage } from 'react-konva';
import style from '../styles/styles.css';
import NextTetromino from '../containers/NextTetromino.js';

let GameInfo = ({points, clearedLines, nextTetromino, isPlaying}) => {
	const buttonStyle = {
		margin: '20% 0',
	};
	if (isPlaying) {
		return (
			<div className={style.gameInfo}>
				<RaisedButton
					label="Pause Game"
					style={buttonStyle}
					primary
				/>

				<Stage width={250} height={100}>
					<Layer>
						<NextTetromino />
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

GameInfo = connect(mapStateToProps)(GameInfo);

export default GameInfo;
