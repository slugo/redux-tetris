import React from 'react';
import GameField from './GameField.js';
import Menu from './Menu.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const GamePanel = ({ width, height }) => {
	const panelStyle = {
		backgroundColor: '#CFD8DC',
		width,
		height,
		margin: '0 auto',
	};
	return (
		<div style={panelStyle}>
			<GameField />
			<MuiThemeProvider>
				<Menu />
			</MuiThemeProvider>
		</div>
	);
};

GamePanel.propTypes = {
	width: React.PropTypes.number,
	height: React.PropTypes.number,
	childrens: React.PropTypes.element,
};

export default GamePanel;




