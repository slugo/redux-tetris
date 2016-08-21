export const SPAWN_TETROMINO = 'SPAWN_TETROMINO';
export const ROTATE_TETROMINO = 'ROTATE_TETROMINO';
export const START_GAME = 'START_GAME';
export const STOP_GAME = 'STOP_GAME';
export const CLEAR_LINE = 'CLEAR_LINE';
export const ADD_SCORE = 'ADD_SCORE';
export const MOVE_TETROMINO = 'MOVE_TETROMINO';
export const ADD_TETROMINO = 'ADD_TETROMINO';

function checkCollisions(direction, activeTetrominos, currentTetromino) {
	switch (direction) {
	case 'left':
		break;
	case 'right':
		break;
	case 'up':
		break;
	case 'down':
		break;
	default:
		return true;
	}
	return true;
}

export const rotateTetromino = (orientation) => {
	return function (dispatch, getState){
		const { activeTetrominos } = getState();
	};
};

export const moveTetromino = (direction) => {
	return function(dispatch, getState){
		const { activeTetrominos, currentTetromino } = getState();
		switch (direction) {
		case 'left':
			if (checkCollisions(direction, activeTetrominos, currentTetromino)) {
				//dispatch new tetromino with new position
			}
			return;
		case 'right':
			if (checkCollisions(direction, activeTetrominos, currentTetromino)) {
				//dispatch new tetromino with new position
			}
			return;
		default:
			return;
		}
	};
};

export const loadGame = () => {

	return function(dispatch){
		dispatch(startGame());

		function handleMoving(e) {
			e.preventDefault();
			switch (e.keyCode){
			case 37:
				dispatch(moveTetromino('left'));
				console.log("LEFT");
				break;
			case 39:
				dispatch(moveTetromino('right'));
				console.log("RIGHT");
				break;
			}
		}
		function handleRotation(e) {
			switch (e.keyCode){
			case 38:
				console.log("UP");
				break;
			case 40:
				console.log("DOWN");
				break;
			}
		}
		window.addEventListener('keydown', handleMoving);
		window.addEventListener('keydown', handleRotation);
	};
};

export const spawnTetromino = (tetrominoType, offsetX, offsetY) => ({
	type: SPAWN_TETROMINO,
	tetrominoType,
	offsetX,
	offsetY,
});

export const addTetromino = (position) => ({
	type: ADD_TETROMINO,
	position,
});
export const startGame = () => ({
	type: START_GAME,
});
export const stopGame = () => ({
	type: STOP_GAME,
});
export const clearLine = (position) => ({
	type: CLEAR_LINE,
	position,
});
export const addScore = (points) => ({
	type: ADD_SCORE,
	points,
});
