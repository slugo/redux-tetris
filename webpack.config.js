
const path = require('path');
const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');

const APP_DIR = './src/';
const BUILD_DIR = './dist/';
const dashboard = new Dashboard();

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
					'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
				],
			},
		],
	},
	devtool: 'eval',
	plugins: [new DashboardPlugin(dashboard.setData)],
};

