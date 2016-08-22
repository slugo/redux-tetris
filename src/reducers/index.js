import { combineReducers } from 'redux';
import gameConstants from '../gameConstants.js';
import * as actions from '../actions/actions.js';

const { initialGrid, shapesMapping, tetrominos, blockUnit } = gameConstants;

function rotateTetromino(matrix) {
	const n = matrix.length;
	const ret = [[], [], [], []];

	for (let i = 0; i < n; ++i) {
		for (let j = 0; j < n; ++j) {
			ret[i][j] = matrix[n - j - 1][i];
		}
	}
	return ret;
}

function menuStatus(state = true, action) {
	switch (action.type) {
	case actions.SHOW_MENU:
		return true;
	case actions.HIDE_MENU:
		return false;
	case actions.START_GAME:
		return false;
	default:
		return state;
	}
}

function isPlaying(state = false, action) {
	switch (action.type) {
	case actions.START_GAME:
		return true;
	case actions.STOP_GAME:
		return false;
	default:
		return state;
	}
}

function activeTetrominos(state = initialGrid, action) {
	switch (action.type) {
	case actions.ADD_TETROMINO:
		return 1;
	default:
		return state;
	}
}
function nextTetromino(state = [], action) {
	switch (action.type) {
	case actions.START_GAME:
		return 1;
	default:
		return state;
	}
}
function currentTetromino(state = {}, action) {
	switch (action.type) {
	case actions.START_GAME:
		const randomNumber = Math.floor(Math.random() * 7);
		const randomShape = shapesMapping[randomNumber];
		return {
			shape: tetrominos[randomShape].shape,
			name: randomShape,
			color: tetrominos[randomShape].color,
			offsetX: blockUnit * 3,
			offsetY: 0,
		};
	case actions.MOVE_RIGHT:
		return Object.assign({}, state, { offsetX: state.offsetX + 30 });
	case actions.MOVE_LEFT:
		return Object.assign({}, state, { offsetX: state.offsetX - 30 });
	case actions.MOVE_DOWN:
		return Object.assign({}, state, { offsetY: state.offsetY + 15 });
	case actions.ROTATE_TETROMINO:
		return Object.assign({}, state, { shape: rotateTetromino(state.shape) });
	default:
		return state;
	}
}
function gameScore(state = 0, action) {
	switch (action.type) {
	case actions.ADD_SCORE:
		return state + action.points;
	case actions.CLEAR_LINE:
		return state + 1;
	default:
		return state;
	}
}
const tetrisApp = combineReducers({
	activeTetrominos,
	currentTetromino,
	gameScore,
	menuStatus,
	isPlaying,
});

export default tetrisApp;
