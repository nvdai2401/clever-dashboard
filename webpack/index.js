const { resolve } = require('path')
const vendor = require('./vendor')
const rules = require('./rules')
const plugins = require('./plugins')
const devtool = require('./dev-tool')
const devServer = require('./dev-server')

const settings = {
	resolve: {
		extensions: ['*', '.js', '.jsx', '.css', '.scss', '.png'],
	},
	context: resolve(__dirname, '..'),
	entry: {
		app: ['react-hot-loader/patch', 'babel-polyfill', './src/index.js'],
		vendor,
	},
	output: {
		filename: '[name].[hash].js',
		path: resolve(__dirname, '..', 'dist'),
	},
	module: {
		rules,
	},
	plugins,
	devServer,
	devtool,
}

module.exports = settings
