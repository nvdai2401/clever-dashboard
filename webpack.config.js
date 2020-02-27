/**
 * TODO:
 *	- Optimize, minify css, js
		- Split js
		- Optimize import Material UI
		- Add css to head, add unnecessary to the end of body
		- Cache everything
 */

const { resolve } = require('path')
const webpackMerge = require('webpack-merge')
const modeConfig = env => require(`./configs/webpack.${env}.config.js`)(env)
const commonConfig = require('./configs/webpack.common.config.js')

const settings = ({ mode }) => {
	console.log(mode)
	return webpackMerge(
		{
			mode,
			entry: resolve(__dirname, 'src/index'),
			output: {
				path: resolve(__dirname, 'dist'),
				filename: '[name].[chunkhash].js',
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
