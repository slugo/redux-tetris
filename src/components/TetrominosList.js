import React from 'react';
import { Rect, Group } from 'react-konva';
import gameConstants from '../gameConstants.js';

const { blockUnit } = gameConstants;

const TetrominosList = ({ grid }) => {
	const arr = [];
	grid.forEach((val, i) => {
		val.forEach((block, j) => {
			if (block !== 'grey') {
				arr.push(<Rect width={blockUnit} height={blockUnit} x={i*30} y={j*30} fill={block} />);
			}
		});
	});
	return <Group>{ arr }</Group>;
};

export default TetrominosList;
