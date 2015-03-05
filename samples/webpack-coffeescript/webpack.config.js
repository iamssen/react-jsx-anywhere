'use strict'

module.exports = {
	entry: 'src/script.coffee',
	output: {
		path: 'dist',
		filename: 'script.js'
	},
	resolve: {
		root: __dirname,
		extensions: ['', '.js', '.coffee']
	},
	module: {
		loaders: [
			{test: /\.coffee$/, loaders: ['coffee-loader', 'react-jsx-anywhere/webpack']}
		]
	}
}