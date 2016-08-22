
const initialGrid = [];
for (let index = 0; index < 10; index++) {
	initialGrid.push([]);
}
for (let index = 0; index < 10; index++) {
	for (let count = 0; count < 22; count++) {
		initialGrid[index].push('grey');
	}
}
export default {
	panelWidth: 500,
	panelHeight: 660,
	fieldWidth: 300,
	fieldHeight: 660,
	blockUnit: 30,
	shapesMapping: [
		'straight', 'square', 'cross', 'leftGun', 'rightGun', 'leftSnake', 'rightSnake',
	],
	tetrominos: {
		straight: {
			shape: [
				[1, 1, 1, 1],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
			color: 'red',
		},
		square: {
			shape: [
				[1, 1, 0, 0],
				[1, 1, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
			color: 'blue',
		},
		cross: {
			shape: [
				[0, 1, 0, 0],
				[1, 1, 1, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
			color: 'green',
		},
		leftGun: {
			shape: [
				[0, 0, 1, 0],
				[1, 1, 1, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
			color: 'orange',
		},
		rightGun: {
			shape: [
				[1, 0, 0, 0],
				[1, 1, 1, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
			color: 'yellow',
		},
		leftSnake: {
			shape: [
				[1, 1, 0, 0],
				[0, 1, 1, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
			color: 'purple',
		},
		rightSnake: {
			shape: [
				[0, 1, 1, 0],
				[1, 1, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
			color: 'black',
		},
	},
	initialGrid,
};



