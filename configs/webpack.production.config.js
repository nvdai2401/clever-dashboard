const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = () => {
	return {
		module: {},
		optimization: {
			minimizer: [new UglifyJsPlugin(), new OptimizeCSSAssetsPlugin()],
		},
	}
}
