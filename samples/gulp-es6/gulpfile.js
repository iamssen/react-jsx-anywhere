'use strict'

var gulp = require('gulp')
var babel = require('gulp-babel')
var jsx = require('react-jsx-anywhere/gulp')
var run = require('run-sequence')

gulp.task('build', function () {
	return gulp.src('src/script.js')
		.pipe(jsx())
		.pipe(babel())
		.pipe(gulp.dest('dist/'))
})

gulp.task('test', function (done) {
	var application = require('./dist/script')
	var container = application.children[0]
	var label = container.children[0]
	var button = container.children[1]

	var test = new application.type().toTypeString() === 'application' &&
		application.props.num === 1 &&
		application.props.str === 'a' &&
		new container.type().toTypeString() === 'container' &&
		container.props.num === 2 &&
		container.props.str === 'b' &&
		new label.type().toTypeString() === 'label' &&
		label.props.num === 3 &&
		label.props.str === 'c' &&
		new button.type().toTypeString() === 'button' &&
		button.props.num === 4 &&
		button.props.str === 'd'

	var error = test ? null : new Error('error')
	done(error)
})

gulp.task('default', function () {
	run('build', 'test')
})