import { connect } from 'react-redux';
import Tetromino from '../components/Tetromino.js';

const mapStateToProps = ({ nextTetromino }) => ({
	shape: nextTetromino.shape,
	name: nextTetromino.name,
	color: nextTetromino.color,
	offsetX: nextTetromino.offsetX,
	offsetY: nextTetromino.offsetY,
});

const NextTetromino = connect(
	mapStateToProps
)(Tetromino);
export default NextTetromino;



