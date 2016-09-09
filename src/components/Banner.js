import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import style from '../styles/styles.css'
import { startGame } from '../actions/index.js';
import { connect } from 'react-redux';

let Banner = ({label, color, opacity, dispatch}) => {
	const banner = {
		background: `rgba(0,0,0,${opacity})`,
		width: '100%',
		height: '100%',
		position: 'absolute',
		top: '0px',
	};

	return (
		<div style={banner}>
			<h1 style={{ paddingTop: '250px', color }}>{label}</h1>
			{ label === 'GAME OVER' ? 
			<MuiThemeProvider>
				<RaisedButton label="New Game" onClick={() => dispatch(startGame())} />
			</MuiThemeProvider> : null}
		</div>
	);
};

Banner = connect()(Banner);
export default Banner;
