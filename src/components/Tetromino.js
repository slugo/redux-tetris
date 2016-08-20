import React from 'react';
import { Rect, Group } from 'react-konva';
import gameConstants from '../gameConstants.js';

const { blockUnit } = gameConstants;

const Tetromino = ({ shape, offsetX, offsetY }) => {
	console.log(` Testing literals ${shape} , ${offsetX} , ${offsetY}`);

	return (
		<Group >
			<Rect width={blockUnit} height={blockUnit} x={0} y={0} fill={0} />
			<Rect width={blockUnit} height={blockUnit} x={0} y={0} fill={0} />
			<Rect width={blockUnit} height={blockUnit} x={0} y={0} fill={0} />
			<Rect width={blockUnit} height={blockUnit} x={0} y={0} fill={0} />
		</Group>
	);
};

Tetromino.propTypes = {
	offsetX: React.PropTypes.string,
	offsetY: React.PropTypes.string,
	shape: React.PropTypes.string,
};

export default Tetromino;




