
export const SPAWN_TETROMINO = 'SPAWN_TETROMINO';
export const ROTATE_TETROMINO = 'ROTATE_TETROMINO';
export const START_GAME = 'START_GAME';
export const CLEAR_LINE = 'CLEAR_LINE';
export const ADD_SCORE = 'ADD_SCORE';
export const MOVE_TETROMINO = 'MOVE_TETROMINO';
export const ADD_TETROMINO = 'ADD_TETROMINO';

export const spawnTetromino = (tetrominoType, offsetX, offsetY) => ({
	type: SPAWN_TETROMINO,
	tetrominoType,
	offsetX,
	offsetY,
});
export const rotateTetromino = (id, orientation) => ({
	type: ROTATE_TETROMINO,
	id,
	orientation,
});

export const moveTetromino = (id, direction) => ({
	type: MOVE_TETROMINO,
	id,
	direction,
});

export const addTetromino = (position) => ({
	type: ADD_TETROMINO,
	position,
});

export const startGame = () => ({
	type: START_GAME,
});

export const clearLine = (id) => ({
	type: CLEAR_LINE,
	id,
});

export const addScore = (points) => ({
	type: ADD_SCORE,
	points,
});
