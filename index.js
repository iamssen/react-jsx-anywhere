'use strict'

var react = require('react-tools')

function replace(match, jsx) {
	try {
		var js = react.transform(jsx)
	} catch (error) {
		throw new Error('jsx parse error:\n' + jsx + '\n\n' + error.toString())
	}
	return '(' + js + ')'
}

module.exports = function (source) {
	return source
		.replace(/jsx\(`([^`\\]*(\\.[^`\\]*)*)`\)/gm, replace)
		.replace(/jsx\(\"\"\"([^`\\]*(\\.[^`\\]*)*)\"\"\"\)/gm, replace)
}