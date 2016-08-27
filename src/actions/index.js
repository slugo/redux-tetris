
import gameConstants from '../gameConstants.js';
import { getActualCoordinates, rotateArray, checkCollisions, lineCompleted } from '../lib/index.js';

export const SPAWN_TETROMINO = 'SPAWN_TETROMINO';
export const ROTATE_TETROMINO = 'ROTATE_TETROMINO';
export const START_GAME = 'START_GAME';
export const STOP_GAME = 'STOP_GAME';
export const GAME_OVER = 'GAME_OVER';
export const CLEAR_LINE = 'CLEAR_LINE';
export const ADD_SCORE = 'ADD_SCORE';
export const MOVE_TETROMINO = 'MOVE_TETROMINO';
export const MOVE_RIGHT = 'MOVE_RIGHT';
export const MOVE_LEFT = 'MOVE_LEFT';
export const MOVE_DOWN = 'MOVE_DOWN';
export const ADD_TETROMINO = 'ADD_TETROMINO';

function dropTetromino(dispatch, startTime) {
	const currentTime = Date.now();
	if (currentTime - startTime >= 500) {
		startTime = currentTime;
		dispatch(moveTetromino('down'));
	}
	requestAnimationFrame((dropTetromino.bind(this, dispatch, startTime)));
}

export const spawnTetromino = (tetrominoType, offsetX, offsetY) => ({
	type: SPAWN_TETROMINO,
	tetrominoType,
	offsetX,
	offsetY,
});
export const addTetromino = (currentTetromino, nextTetromino) => {
	const { shapesMapping } = gameConstants;
	const newRandomNumber = Math.floor(Math.random() * 7);
	const nextRandomShape = shapesMapping[newRandomNumber];

	return {
		type: ADD_TETROMINO,
		currentTetromino: getActualCoordinates(currentTetromino),
		color: currentTetromino.color,
		nextTetromino,
		nextRandomShape,
	};
};
export const startGame = () => {
	const { shapesMapping } = gameConstants;
	const currentRandomNumber = Math.floor(Math.random() * 7);
	const nextRandomNumber = Math.floor(Math.random() * 7);
	const currentRandomShape = shapesMapping[currentRandomNumber];
	const nextRandomShape = shapesMapping[nextRandomNumber];

	return {
		type: START_GAME,
		currentRandomShape,
		nextRandomShape,
	};
};
export const stopGame = () => ({
	type: STOP_GAME,
});
export const gameOver = () => ({
	type: GAME_OVER,
});
export const clearLine = () => ({
	type: CLEAR_LINE,
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
export const rotateRight = (rotatedTetromino) => ({
	type: ROTATE_TETROMINO,
	rotatedTetromino,
});
export const rotateTetromino = () => (
	function (dispatch, getState) {
		const { activeTetrominos, currentTetromino } = getState();
		const rotatedTetromino = Object.assign({}, currentTetromino);
		rotatedTetromino.shape = rotateArray(rotatedTetromino);
		if (!checkCollisions('rotation', activeTetrominos, rotatedTetromino)) {
			dispatch(rotateRight(rotatedTetromino.shape));
		}
	}
);
export const moveTetromino = (direction) => (
	function (dispatch, getState) {
		const { activeTetrominos, currentTetromino, nextTetromino } = getState();
		const collisionCheck = checkCollisions(direction, activeTetrominos, currentTetromino);
		switch (direction) {
		case 'left':
			if (collisionCheck === false) {
				dispatch(moveLeft());
			}
			return;
		case 'right':
			if (collisionCheck === false) {
				dispatch(moveRight());
			}
			return;
		case 'down':
			if (collisionCheck === false) {
				dispatch(moveDown());
			} else if (collisionCheck === GAME_OVER) {
				dispatch(gameOver());
			} else if (lineCompleted(activeTetrominos, currentTetromino)) {
				dispatch(clearLine());
			} else {
				dispatch(addTetromino(currentTetromino, nextTetromino));
			}
			return;
		default:
			return;
		}
	}
);
export const loadGame = () => (
	function (dispatch) {
		dispatch(startGame());
		function handleMoving(e) {
			switch (e.keyCode) {
			case 37:
				e.preventDefault();
				dispatch(moveTetromino('left'));
				break;
			case 39:
				e.preventDefault();
				dispatch(moveTetromino('right'));
				break;
			case 40:
				e.preventDefault();
				dispatch(moveTetromino('down'));
				break;
			default:
				break;
			}
		}
		function handleRotation(e) {
			switch (e.keyCode) {
			case 38:
				e.preventDefault();
				dispatch(rotateTetromino());
				break;
			default:
				break;
			}
		}
		//test request animation frame
		dropTetromino(dispatch, Date.now());
		window.addEventListener('keydown', handleMoving);
		window.addEventListener('keydown', handleRotation);
	}
);









