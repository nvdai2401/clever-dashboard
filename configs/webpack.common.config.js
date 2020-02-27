const webpack = require('webpack')
const { resolve } = require('path')
const webpackMerge = require('webpack-merge')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const settings = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)?$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(scss|css)$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: './dist/styles/',
						},
					},
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				loader: 'file-loader',
			},
			// {
			// 	test: /\.(png|jpe?g|gif)$/i,
			// 	loader: 'url-loader',
			// 	options: {
			// 		limit: 10 * 1024,
			// 	},
			// },
			// {
			// 	test: /\.svg$/,
			// 	loader: 'svg-url-loader',
			// 	options: {
			// 		// Images larger than 10 KB won’t be inlined
			// 		limit: 10 * 1024,
			// 		// Remove quotes around the encoded URL –
			// 		// they’re rarely useful
			// 		noquotes: true,
			// 	},
			// },
		],
	},

	devServer: {
		contentBase: resolve(__dirname, 'dist'),
		port: 3000,
		historyApiFallback: true,
	},
	plugins: [
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
		new CopyWebpackPlugin([
			{
				from: 'src/assets/images',
				to: 'assets/images',
			},
		]),
		new CleanWebpackPlugin(),
	],
	optimization: {
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
