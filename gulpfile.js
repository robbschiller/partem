'use strict';

var gulp = require("gulp")
var sass = require("gulp-sass")
var jshint = require("gulp-jshint")
var nodemon = require("gulp-nodemon")

gulp.task('sass', function () {
	gulp.src('./public/scss/main.scss')
		.pipe(sass({includePaths: ['./public/scss']}))
		.pipe(gulp.dest('./public/css'));
});

gulp.task('lint', function () {
	gulp.src('./public/js/**/*.js')
		.pipe(jshint())
});

gulp.task('default', function () {
	nodemon({ script: 'server.js', ext: 'html jade scss js' })
		.on(['restart'], ['sass', 'lint'])
});
