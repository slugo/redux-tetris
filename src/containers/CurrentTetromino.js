import { connect } from 'react-redux';
import Tetromino from '../components/Tetromino.js';

const mapStateToProps = ({ currentTetromino }) => ({
	shape: currentTetromino.shape,
	name: currentTetromino.name,
	color: currentTetromino.color,
	offsetX: currentTetromino.offsetX,
	offsetY: currentTetromino.offsetY,
});

const CurrentTetromino = connect(
	mapStateToProps
)(Tetromino);

export default CurrentTetromino;



