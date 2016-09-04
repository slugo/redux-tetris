import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { connect } from 'react-redux';
import { loadGame } from '../actions/index.js';

injectTapEventPlugin();
let Menu = ({ menuStatus, dispatch }) => {
	console.log(dispatch);
	const buttonStyle = {
		width: '25%',
		margin: '10% auto',
		display: menuStatus ? 'inline-block' : 'none',
		verticalAlign: 'top',
	};
	const imgStyle = {
		height: '60%',
		width: '30%',
	};
	if (menuStatus) {
		return (
			<div>
				<img src="../sebaTetris.png" style={imgStyle} />
				<RaisedButton
					label="New Game"
					primary style={buttonStyle}
					onClick={() => {
						dispatch(loadGame());
					}}
				/>
			</div>
		);
	}
	return null;
};
const mapStateToProps = (state) => (
	{ menuStatus: state.menuStatus }
);
Menu = connect(mapStateToProps)(Menu);
Menu.propTypes = {
	dispatch: React.PropTypes.func,
	menuStatus: React.PropTypes.bool,
};
export default Menu;



