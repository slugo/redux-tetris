const initialGrid = new Array(10);
for (let index = 0; index < 10; index++) {
	initialGrid[index] = new Array(22);
}
export default {
	panelWidth: 400,
	panelHeight: 528,
	fieldWidth: 240,
	fieldHeight: 528,
	blockUnit: 24,
	tetrominos: {
		straight: [
			[1, 1, 1, 1],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		],
		square: [
			[1, 1, 0, 0],
			[1, 1, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		],
		cross: [
			[0, 1, 0, 0],
			[1, 1, 1, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		],
		leftGun: [
			[0, 0, 0, 1],
			[1, 1, 1, 1],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		],
		rightGun: [
			[1, 0, 0, 0],
			[1, 1, 1, 1],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		],
		leftSnake: [
			[1, 1, 0, 0],
			[0, 1, 1, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		],
		rightSnake: [
			[0, 0, 1, 1],
			[0, 1, 1, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		],
	},
	initialGrid,
};



