import React from 'react';
import { Rect, Group } from 'react-konva';
import gameConstants from '../gameConstants.js';

const { blockUnit } = gameConstants;

function getCoordinates(shape) {
	const coordinates = [];
	for (let i = 0; i < shape.length; i++) {
		for (let j = 0; j < shape[i].length; j++) {
			if (shape[i][j]) {
				coordinates.push({ x: i, y: j });
			}
		}
	}
	return coordinates;
}

const Tetromino = ({ shape, offsetX, offsetY, color }) => {
	const coordinates = getCoordinates(shape);

	return (
		<Group >
			<Rect width={blockUnit} height={blockUnit} x={0} y={0} fill={color} />
			<Rect width={blockUnit} height={blockUnit} x={0} y={0} fill={color} />
			<Rect width={blockUnit} height={blockUnit} x={0} y={0} fill={color} />
			<Rect width={blockUnit} height={blockUnit} x={0} y={0} fill={color} />
		</Group>
	);
};

Tetromino.propTypes = {
	offsetX: React.PropTypes.string,
	offsetY: React.PropTypes.string,
	shape: React.PropTypes.array,
};

export default Tetromino;




