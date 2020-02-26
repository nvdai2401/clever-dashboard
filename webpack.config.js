const webpack = require('webpack')
const { resolve } = require('path')
const webpackMerge = require('webpack-merge')
const modeConfig = env => require(`./configs/webpack.${env}.js`)(env)
const commonConfig = require('./configs/webpack.common.js')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const settings = ({ mode }) => {
	console.log(mode)
	return webpackMerge(
		{
			mode,
			entry: resolve(__dirname, 'src/index'),
			output: {
				path: resolve(__dirname, 'dist'),
				filename: '[name].bundle.js',
				publicPath: '/',
			},
			resolve: {
				alias: {
					'@src': resolve(__dirname, 'src'),
					'@pages': resolve(__dirname, 'src/pages'),
					'@components': resolve(__dirname, 'src/components'),
				},
				modules: ['node_modules', resolve(__dirname, 'src')],
				extensions: ['.js', '.jsx'],
			},
		},
		commonConfig,
		modeConfig(mode)
	)
}
module.exports = settings
