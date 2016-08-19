import { combineReducers } from 'redux';
import gameConstants from '../gameConstants.js';
import * as actions from '../actions/actions.js';

const { initialGrid } = gameConstants;

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

function activeTetrominos(state = initialGrid, action) {
	switch (action.type) {
	case actions.ADD_TETROMINO:
		return 1;
	default:
		return state;
	}
}

function currentTetromino(state = [], action) {
	switch (action.type) {
	case actions.SPAWN_TETROMINO:
		return 1;
	case actions.MOVE_TETROMINO:
		return 1;
	case actions.ROTATE_TETROMINO:
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

function gameScore(state = { points: 0, lines: 0 }, action) {
	switch (action.type) {
	case actions.ADD_SCORE:
		return Object.assign({}, state, { points: state.points + action.points });
	case actions.CLEAR_LINE:
		return Object.assign({}, state, { lines: state.lines + action.lines });
	default:
		return state;
	}
}

const tetrisApp = combineReducers({
	activeTetrominos,
	currentTetromino,
	gameScore,
	menuStatus,
	nextTetromino,
});

export default tetrisApp;
/*
initialState = {
	currentTetromino:{
		type:
		position:
	}
	nextTetromino:{
		type:
	}
	activeTetrominos:{

	}
	score:{

	}
	clearedLines:{

	}
}
*/

