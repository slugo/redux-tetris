
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { startGame } from '../actions/actions.js';

let Menu = ({ active, dispatch }) => {
	let style = {
		width: '50%',
		margin: '0 auto',
		display: active ? 'block' : 'none',
	};
	return (
		<div>
			<RaisedButton
				label="NewGame"
				primary style={style}
				label="NEW GAME"
				onClick={() => {
					dispatch(startGame());
				}}
			/>
		</div>
	);
};
Menu = connect()(Menu);

Menu.propTypes = {
	dispatch: React.PropTypes.function,
	active: React.PropTypes.boolean,
};
export default Menu;

