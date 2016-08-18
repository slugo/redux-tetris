import { combineReducers } from 'redux';
import * as actions from '../actions/actions.js';

function menuStatus(state = true, action) {
	switch (action.type) {
	case actions.SHOW_MENU:
		return true;
	case actions.HIDE_MENU:
		return false;
	default:
		return state;
	}
}

function activeTetrominos(state = [], action) {
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

