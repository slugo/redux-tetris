import React from 'react';
import style from '../styles/styles.css';

const GameInfo = ({points, clearedLines, nextTetromino}) => {
	return (
		<div className={style.gameInfo}>
			{points} , {clearedLines}
		</div>
	);
};

export default GameInfo;


