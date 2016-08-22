import gameConstants from '../gameConstants.js';

export const SPAWN_TETROMINO = 'SPAWN_TETROMINO';
export const ROTATE_TETROMINO = 'ROTATE_TETROMINO';
export const START_GAME = 'START_GAME';
export const STOP_GAME = 'STOP_GAME';
export const CLEAR_LINE = 'CLEAR_LINE';
export const ADD_SCORE = 'ADD_SCORE';
export const MOVE_TETROMINO = 'MOVE_TETROMINO';
export const MOVE_RIGHT = 'MOVE_RIGHT';
export const MOVE_LEFT = 'MOVE_LEFT';
export const MOVE_DOWN = 'MOVE_DOWN';
export const ROTATE_CLOCK = 'ROTATE_CLOCK';
export const ROTATE_COUNTER = 'ROTATE_COUNTER';
export const ADD_TETROMINO = 'ADD_TETROMINO';

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

export const moveRight = () => ({
	type: MOVE_RIGHT,
});

export const moveLeft = () => ({
	type: MOVE_LEFT,
});

export const moveDown = () => ({
	type: MOVE_DOWN,
});

function checkCollisions(direction, activeTetrominos, currentTetromino) {
	const { blockUnit, fieldWidth, fieldHeight } = gameConstants;
	let farthestX = 0;
	let closestX = 10;
	let farthestY = 0;

	for (let i = 0; i < currentTetromino.shape.length; i++) {
		for (let j = 0; j < currentTetromino.shape[i].length; j++) {
			const coord = currentTetromino.shape[i][j];
			if (coord) {
				farthestX = Math.max(farthestX, j);
				closestX = Math.min(closestX, j);
				farthestY = Math.max(farthestY, i);
			}
		}
	}

	switch (direction) {
	case 'left':
		if (((closestX * blockUnit) + (currentTetromino.offsetX - blockUnit)) < 0) {
			return false;
		}
		break;
	case 'right':
		if (((farthestX * blockUnit) + currentTetromino.offsetX + blockUnit) >= fieldWidth) {
			return false;
		}
		break;
	case 'up':
		break;
	case 'down':
		if (((farthestY * blockUnit) + currentTetromino.offsetY + 30) >= fieldHeight) {
			//Add currentTetromino to activeTetromino list
			return false;
		}
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
	return function(dispatch, getState) {
		const { activeTetrominos, currentTetromino } = getState();
		switch (direction) {
		case 'left':
			if (checkCollisions(direction, activeTetrominos, currentTetromino)) {
				dispatch(moveLeft());
			}
			return;
		case 'right':
			if (checkCollisions(direction, activeTetrominos, currentTetromino)) {
				dispatch(moveRight());
			}
			return;
		case 'down':
			if (checkCollisions(direction, activeTetrominos, currentTetromino)) {
				dispatch(moveDown());
			}
			return;
		default:
			return;
		}
	};
};

export const testCreator = () => {
	return {
		type:"MOVE_RIGHT",
	};
};

export const loadGame = () => {
	return function(dispatch) {
		dispatch(startGame());

		function handleMoving(e) {
			e.preventDefault();
			switch (e.keyCode){
			case 37:
				dispatch(moveTetromino('left'));
				break;
			case 39:
				dispatch(moveTetromino('right'));
				break;
			}
		}
		function handleRotation(e) {
			switch (e.keyCode){
			case 38:
				break;
			case 40:
				dispatch(moveTetromino('down'));
				break;
			}
		}
		setInterval(()=>dispatch(moveTetromino('down')),1000);
		window.addEventListener('keydown', handleMoving);
		window.addEventListener('keydown', handleRotation);
	};
};
