'use strict'

var jsx = require('./index')

module.exports = function (source) {
	try {
		source = jsx(source)
	} catch (error) {
		this.emitError(error.toString())
		console.log('exports', error)
	}

	return source
}