const path = require('path');

const APP_DIR = './src/';
const BUILD_DIR = './dist/';

module.exports = {
	entry: path.resolve(APP_DIR, 'app.js'),
	output: {
		path: path.resolve(__dirname, BUILD_DIR),
		filename: 'bundle.js',
		publicPath: '/dist/',
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				loaders: [
					'style?sourceMap',
					'css?modules',
				],
			},
		],
	},
	devtool: 'eval',
};
