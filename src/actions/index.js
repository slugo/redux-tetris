
import gameConstants from '../gameConstants.js';

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

function getActualCoordinates(newTetromino) {
	const coordinates = [];
	const { shape, offsetX, offsetY } = newTetromino;
	const { blockUnit } = gameConstants;
	for (let i = 0; i < shape.length; i++) {
		for (let j = 0; j < shape[i].length; j++) {
			if (shape[i][j]) {
				coordinates.push({ x: j + (offsetX / blockUnit), y: i + (offsetY / blockUnit) });
			}
		}
	}
	return coordinates;
}
function rotateArray(tetromino) {
	const matrix = tetromino.shape;
	const n = matrix.length;
	const ret = [[], [], [], []];
	let closestX = 10;

	for (let i = 0; i < n; ++i) {
		for (let j = 0; j < n; ++j) {
			ret[i][j] = matrix[n - j - 1][i];
			if (ret[i][j]) {
				closestX = Math.min(closestX, j);
			}
		}
	}
	const fill = new Array(closestX).fill(0);
	for (let i = 0; i < n; ++i) {
		ret[i] = ret[i].slice(closestX).concat(fill);
	}

	return ret;
}
function checkCollisions(direction, activeTetrominos, currentTetromino) {
	const { blockUnit } = gameConstants;
	const currentX = currentTetromino.offsetX / blockUnit;
	const currentY = currentTetromino.offsetY / blockUnit;
	let leftCollision = false;
	let rightCollision = false;
	let downCollision = false;
	let rotationCollision = false;
	let gameOver = false;

	for (let i = 0; i < currentTetromino.shape.length; i++) {
		for (let j = 0; j < currentTetromino.shape[i].length; j++) {
			const coord = currentTetromino.shape[i][j];
			if (coord) {
				if (j + currentX < 0 || i + currentY >= 22 || j + currentX >= 10 ) {
					rotationCollision = true;
				}
				if (((j - 1) + currentX) < 0 || activeTetrominos[(j + currentX) - 1][currentY + i] !== 'grey') {
					leftCollision = true;
				}
				if (((j + 1) + currentX) >= 10 || activeTetrominos[j + currentX + 1][currentY + i] !== 'grey') {
					rightCollision = true;
				}
				if (((i + 1) + currentY) >= 22 || activeTetrominos[j + currentX][currentY + i + 1] !== 'grey') {
					downCollision = true;
				}
				if (downCollision && currentY === 0) {
					gameOver = true;
				}
			}
		}
	}
	switch (direction) {
	case 'left':
		return leftCollision;
	case 'right':
		return rightCollision;
	case 'down':
		if (gameOver) {
			return GAME_OVER;
		}
		return downCollision;
	case 'rotation':
		return rotationCollision;
	default:
		return true;
	}
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
		setInterval(() => dispatch(moveTetromino('down')), 500);
		window.addEventListener('keydown', handleMoving);
		window.addEventListener('keydown', handleRotation);
	}
);






