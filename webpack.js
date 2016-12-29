
const path = require('path');
const Webpack = require('webpack');

const SRC_DIR = path.normalize(__dirname + '/src');
const DIST_DIR = path.normalize(__dirname + '/dist');

const plugins = [
	new Webpack.optimize.UglifyJsPlugin({ mangle: true, compress: {}, output: { comments: false } }),
];

const CONFIG = {
	entry: {
		'simple-validator.js': [ './src/simple-validator.js' ],
	},
	output: {
		path: DIST_DIR,
		filename: '[name]',
		libraryTarget: 'umd',
	},
	resolve: {
		extensions: [ '', '.js' ],
		root: [ SRC_DIR ],
	},
	stats: {
		color: true,
		children: false,
		chunkModules: false,
	},
	plugins,
};


module.exports = CONFIG;
