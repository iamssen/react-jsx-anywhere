'use strict'

var jsx = require('./index')
var through = require('through')

module.exports = function (file) {
	var data = '', stream = through(write, end)

	return stream

	function write(buf) {
		data += buf
	}

	function end() {
		try {
			data = jsx(data)
		} catch (error) {
			return stream.emit('error', error)
		}
		stream.queue(data)
		stream.queue(null)
	}
}