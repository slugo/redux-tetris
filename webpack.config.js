
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
			},
		],
	},
	devtool: 'eval',
	plugins: [new DashboardPlugin(dashboard.setData)],
};

