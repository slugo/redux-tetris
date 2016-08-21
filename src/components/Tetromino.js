import React from 'react';
import { Rect, Group } from 'react-konva';
import gameConstants from '../gameConstants.js';

const { blockUnit } = gameConstants;

function getCoordinates(shape) {
	const coordinates = [];
	for (let i = 0; i < shape.length; i++) {
		for (let j = 0; j < shape[i].length; j++) {
			if (shape[i][j]) {
				coordinates.push({ x: j, y: i });
			}
		}
	}
	return coordinates;
}

const Tetromino = ({ shape, offsetX, offsetY, color }) => {
	const coordinates = getCoordinates(shape);
	const xs = coordinates.map((coord) => (coord.x * blockUnit) + offsetX);
	const ys = coordinates.map((coord) => (coord.y * blockUnit) + offsetY);

	return (
		<Group>
			<Rect width={blockUnit} height={blockUnit} x={xs[0]} y={ys[0]} fill={color} />
			<Rect width={blockUnit} height={blockUnit} x={xs[1]} y={ys[1]} fill={color} />
			<Rect width={blockUnit} height={blockUnit} x={xs[2]} y={ys[2]} fill={color} />
			<Rect width={blockUnit} height={blockUnit} x={xs[3]} y={ys[3]} fill={color} />
		</Group>
	);
};

Tetromino.propTypes = {
	offsetX: React.PropTypes.number,
	offsetY: React.PropTypes.number,
	shape: React.PropTypes.array,
};

export default Tetromino;




