import React from 'react';

const GameInfo = ({points, clearedLines, nextTetromino}) => {
	const style = {
		display: 'inline-block',
		verticalAlign: 'top',
		backgroundColor: 'white',
		width: '10%',
		height: '10%',
	};
	console.log(`${points}, ${clearedLines}, ${nextTetromino}`);
	return (
		<div style={style}>
			{points} , {clearedLines}
		</div>
	);
};

export default GameInfo;


