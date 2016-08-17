
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const GamePanel = ({ width, height, children }) => {
	const panelStyle = {
		backgroundColor: '#CFD8DC',
		width,
		height,
		margin: '0 auto',
	};
	return (
		<MuiThemeProvider>
			<div style={panelStyle}>
				{children}
			</div>
		</MuiThemeProvider>
	);
};

GamePanel.propTypes = {
	width: React.PropTypes.number,
	height: React.PropTypes.number,
	children: React.PropTypes.element,
};

export default GamePanel;

