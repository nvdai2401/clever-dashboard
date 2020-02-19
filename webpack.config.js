const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const settings = {
	entry: resolve(__dirname, 'src/index'),
	output: {
		path: resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
		publicPath: '/',
	},
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
	resolve: {
		alias: {
			'@src': resolve(__dirname, 'src'),
			'@pages': resolve(__dirname, 'src/pages'),
			'@components': resolve(__dirname, 'src/components'),
		},
		modules: ['node_modules', resolve(__dirname, 'src')],
		extensions: ['.js', '.jsx'],
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
			template: resolve('./index.html'),
			inject: true,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
			},
		}),
		// new LodashModuleReplacementPlugin(),
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
