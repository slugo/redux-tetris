import { connect } from 'react-redux';
import TetrominosList from '../components/TetrominosList.js';

const mapStateToProps = (state) => ({
	grid: state.activeTetrominos,
});

const ActiveTetrominos = connect(
    mapStateToProps
)(TetrominosList);

export default ActiveTetrominos;


