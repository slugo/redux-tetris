
import React from 'react';
import { Rect, Group } from 'react-konva';
import gameConstants from '../gameConstants.js';

const { blockUnit, tetrominos } = gameConstants;

const Tetromino = ({ color, type }) => {
	const { xs, ys } = tetrominos[type];
	return (
		<Group >
			<Rect width={blockUnit} height={blockUnit} x={blockUnit * xs[0]} y={blockUnit * ys[0]} fill={color} />
			<Rect width={blockUnit} height={blockUnit} x={blockUnit * xs[1]} y={blockUnit * ys[1]} fill={color} />
			<Rect width={blockUnit} height={blockUnit} x={blockUnit * xs[2]} y={blockUnit * ys[2]} fill={color} />
			<Rect width={blockUnit} height={blockUnit} x={blockUnit * xs[3]} y={blockUnit * ys[3]} fill={color} />
		</Group>
	);
};

Tetromino.propTypes = {
	color: React.PropTypes.string,
	type: React.PropTypes.string,
};

export default Tetromino;

