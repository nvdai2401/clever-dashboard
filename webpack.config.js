const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const settings = {
	entry: './src/index.js',
	output: {
		path: resolve(__dirname, 'build'),
		publicPath: '/',
		filename: 'bundle.js',
	},
	devServer: {
		contentBase: './build',
	},
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.(js|jsx)?$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader'],
			},
			{
				test: /\.(s[ac]ss|css)$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				loader: 'file-loader',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: resolve('./index.html'),
		}),
		new LodashModuleReplacementPlugin(),
	],
	optimization: {
		minimizer: [new UglifyJsPlugin()],
		splitChunks: {},
	},
	externals: {
		lodash: {
			commonjs: 'lodash',
			amd: 'lodash',
			root: '_', // indicates global variable
		},
	},
}

module.exports = settings
