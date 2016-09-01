import { connect } from 'react-redux';
import GameInfo from '../components/GameInfo.js';

const mapStateToProps = ({ gameScore, nextTetromino }) => ({
	points: gameScore.points,
	clearedLines: gameScore.clearedLines,
	nextTetromino,
});

const CurrentGameInfo = connect(
    mapStateToProps
)(GameInfo);

export default CurrentGameInfo;



