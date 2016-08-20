import { combineReducers } from 'redux';
import gameConstants from '../gameConstants.js';
import * as actions from '../actions/actions.js';

const { initialGrid, tetrominos } = gameConstants;

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

function rotateTetromino(matrix, orientation) {
	const n = matrix.length;
	let ret = new Array(n);
	ret = ret.map((x) => new Array(x.length));

	if (orientation === 'right') {
		for (let i = 0; i < n; ++i) {
			for (let j = 0; j < n; ++j) {
				ret[i][j] = matrix[n - j - 1][i];
			}
		}
	} else {
		for (let i = 0; i < n; ++i) {
			for (let j = 0; j < n; ++j) {
				ret[i][j] = matrix[n - i - 1][j];
			}
		}
	}
	return ret;
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
		break;
	}
}
function currentTetromino(state = [], action) {
	const randomnumber = Math.floor(Math.random() * 7);

	switch (action.type) {
	case actions.START_GAME:
		return {
			shape: tetrominos[randomnumber],
			offsetX: 0,
			offsetY: 0,
		};
	case actions.MOVE_TETROMINO:
		return 1;
	case actions.ROTATE_TETROMINO:
		return 1;
	default:
		return state;
	}
}
function checkCollision() {

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



