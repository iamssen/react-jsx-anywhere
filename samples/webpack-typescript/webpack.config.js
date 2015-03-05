'use strict'

module.exports = {
	entry: 'src/script.ts',
	output: {
		path: 'dist',
		filename: 'script.js'
	},
	resolve: {
		root: __dirname,
		extensions: ['', '.js', '.ts']
	},
	module: {
		loaders: [
			{test: /\.ts$/, loaders: ['ts-loader', 'react-jsx-anywhere/webpack']}
		]
	}
}