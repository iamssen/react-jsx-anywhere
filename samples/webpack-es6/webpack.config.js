'use strict'

module.exports = {
	entry: 'src/script.js',
	output: {
		path: 'dist',
		filename: 'script.js'
	},
	resolve: {
		root: __dirname,
		extensions: ['', '.js']
	},
	module: {
		loaders: [
			{test: /\.js$/, loaders: ['babel-loader', 'react-jsx-anywhere/webpack']}
		]
	}
}