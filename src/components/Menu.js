
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { connect } from 'react-redux';
import { loadGame } from '../actions/index.js';
import style from '../styles/styles.css';

injectTapEventPlugin();
let Menu = ({ isPlaying, dispatch }) => {
	if (!isPlaying) {
		return (
			<div>
				<RaisedButton
					label="New Game"
					className={style.menuButton}
					onClick={() => {
						dispatch(loadGame());
					}}
					primary
				/>
			</div>
		);
	}
	return null;
};
const mapStateToProps = (state) => (
	{ isPlaying: state.isPlaying }
);
Menu = connect(mapStateToProps)(Menu);
Menu.propTypes = {
	dispatch: React.PropTypes.func,
	isPlaying: React.PropTypes.bool,
};
export default Menu;



