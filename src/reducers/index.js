import { combineReducers } from 'redux';
import * as actions from '../actions/actions.js';


function activeTetrominos(state = [], action) {
	switch (action.type) {
	default:
		return state;
	}
}

function currentTetromino(state = [], action) {
	switch (action.type) {
	default:
		return state;
	}
}

function gameScore(state = [], action) {
	switch (action.type) {
	default:
		return state;
	}
}

function gameInitializer(state = [], action) {
	switch (action.type) {
	case actions.START_GAME:
		return state;
	default:
		return state;
	}
}

const tetrisApp = combineReducers({
	activeTetrominos,
	currentTetromino,
	gameScore,
	gameInitializer,
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

