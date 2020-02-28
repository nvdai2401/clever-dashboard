const webpack = require('webpack')
const { resolve } = require('path')
const webpackMerge = require('webpack-merge')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

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
							publicPath: '/dist/path/to/',
						},
					},
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'assets/images/',
				},
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
		hot: true,
		inline: true,
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
		// new CopyWebpackPlugin([
		// 	{
		// 		from: 'src/assets/images',
		// 		to: 'assets/images',
		// 	},
		// ]),
		new BundleAnalyzerPlugin(),
		new CleanWebpackPlugin(),
	],
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: false,
					chunks: 'all',
				},
			},
		},
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
