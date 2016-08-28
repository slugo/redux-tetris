
import { combineReducers } from 'redux';
import { getNewGrid } from '../lib/index.js';
import gameConstants from '../gameConstants.js';
import * as actions from '../actions/index.js';

const { initialGrid, tetrominos, blockUnit } = gameConstants;

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
		return getNewGrid(state, action.currentTetromino, action.color);
	case actions.START_GAME:
		return initialGrid;
	default:
		return state;
	}
}
function nextTetromino(state = {}, action) {
	switch (action.type) {
	case actions.START_GAME:
		return {
			shape: tetrominos[action.nextRandomShape].shape,
			name: action.nextRandomShape,
			color: tetrominos[action.nextRandomShape].color,
			offsetX: blockUnit * 3,
			offsetY: 0,
		};
	case actions.ADD_TETROMINO:
		return {
			shape: tetrominos[action.nextRandomShape].shape,
			name: action.nextRandomShape,
			color: tetrominos[action.nextRandomShape].color,
			offsetX: blockUnit * 3,
			offsetY: 0,
		};
	default:
		return state;
	}
}
function currentTetromino(state = {}, action) {
	switch (action.type) {
	case actions.START_GAME:
		return {
			shape: tetrominos[action.currentRandomShape].shape,
			name: action.currentRandomShape,
			color: tetrominos[action.currentRandomShape].color,
			offsetX: blockUnit * 3,
			offsetY: 0,
		};
	case actions.ADD_TETROMINO:
		return Object.assign({}, action.nextTetromino);
	case actions.MOVE_RIGHT:
		return Object.assign({}, state, { offsetX: state.offsetX + blockUnit });
	case actions.MOVE_LEFT:
		return Object.assign({}, state, { offsetX: state.offsetX - blockUnit });
	case actions.MOVE_DOWN:
		return Object.assign({}, state, { offsetY: state.offsetY + blockUnit });
	case actions.ROTATE_TETROMINO:
		return Object.assign({}, state, { shape: action.rotatedTetromino });
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
	nextTetromino,
	gameScore,
	menuStatus,
	isPlaying,
});

export default tetrisApp;









