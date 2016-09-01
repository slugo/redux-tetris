import React from 'react';

const GameInfo = ({points, clearedLines, nextTetromino}) => {
	const style = {
		display: 'inline',
		verticalAlign: 'top',
	};
	console.log(`${points}, ${clearedLines}, ${nextTetromino}`);
	return (
		<div style={style}>
			{points} , {clearedLines}
		</div>
	);
};

export default GameInfo;


