
export default {
	panelWidth: 400,
	panelHeight: 528,
	fieldWidth: 240,
	fieldHeight: 528,
	blockUnit: 24,
	tetrominos: {
		straight: {
			xs: [0, 1, 2, 3],
			ys: [0, 0, 0, 0],
		},
		square: {
			xs: [0, 1, 0, 1],
			ys: [0, 0, 1, 1],
		},
		cross: {
			xs: [0, 1, 2, 1],
			ys: [0, 0, 0, 1],
		},
		leftGun: {
			xs: [0, 0, 1, 2],
			ys: [0, 1, 1, 1],
		},
		rightGun: {
			xs: [2, 2, 1, 0],
			ys: [0, 1, 1, 1],
		},
		leftSnake: {
			xs: [0, 1, 1, 2],
			ys: [0, 0, 1, 1],
		},
		rightSnake: {
			xs: [2, 1, 1, 0],
			ys: [0, 0, 1, 1],
		},
	},
};

