import { connect } from 'react-redux';
import TetrominosList from './TetrominosList.js';

const getActiveTetrominos = (state) => {
	const a = 2;
	return a + state;
};

const mapStateToProps = (state) => ({
	activeTetrominos: getActiveTetrominos(state.activeTetrominos),
});

const ActiveTetrominos = connect(
    mapStateToProps
)(TetrominosList);

export default ActiveTetrominos;
