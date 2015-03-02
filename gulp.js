'use strict'

var es = require('event-stream')
var jsx = require('./index')
var Buffer = require('buffer').Buffer

module.exports = function () {
	function func(file) {
		if (file.isNull()) return this.emit('data', file)

		var source = file.contents.toString('utf8')

		try {
			var parsed = jsx(source)
			file.contents = new Buffer(parsed)
		} catch (error) {
			this.emit('error', error)
		}

		this.emit('data', file)
	}

	return es.through(func)
}