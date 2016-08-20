import { connect } from 'react-redux';
import Tetromino from '../components/Tetromino.js';

const mapStateToProps = ({ currentTetromino }) => ({
	shape: currentTetromino.shape,
	offsetX: currentTetromino.offsetX,
	offsetY: currentTetromino.offsetY,
});

const CurrentTetromino = connect(
	mapStateToProps
)(Tetromino);

export default CurrentTetromino;



