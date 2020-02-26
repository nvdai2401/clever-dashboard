const webpack = require('webpack')
const { resolve } = require('path')
const webpackMerge = require('webpack-merge')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const settings = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)?$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(s[ac]ss|css)$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				loader: 'file-loader',
			},
		],
	},

	devServer: {
		contentBase: resolve(__dirname, 'dist'),
		port: 3000,
		historyApiFallback: true,
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'CleVer Dashboard',
			template: resolve('./src/index.html'),
			inject: true,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
			},
		}),
		new webpack.ProgressPlugin((percentage, message, ...args) => {
			console.log(`${(percentage * 100).toFixed()}% ${message}`, ...args)
		}),
		new MiniCssExtractPlugin({
			filename: 'style.[chunkhash].css',
		}),
	],
	optimization: {
		minimizer: [new UglifyJsPlugin(), new OptimizeCSSAssetsPlugin()],
		splitChunks: {},
	},
	// externals: {
	// 	lodash: {
	// 		commonjs: 'lodash',
	// 		amd: 'lodash',
	// 		root: '_', // indicates global variable
	// 	},
	// },
}

module.exports = settings
