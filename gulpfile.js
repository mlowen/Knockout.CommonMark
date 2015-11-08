
var gulp = require('gulp');
var bower = require('gulp-bower');
var uglify = require('gulp-uglify');
var zip = require('gulp-zip');

var meta = require('./package.json');

gulp.task('bower', function() { return bower(); });

gulp.task('minify', function() {
	return gulp.src('./src/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./dist'));
});

gulp.task('dist', [ 'minify' ], function() {
	return gulp.src([ './dist/knockout.commonmark.js', './README.md', './LICENSE' ])
		.pipe(zip(meta.name + '-' + meta.version + '.zip'))
		.pipe(gulp.dest('./'));	
});

// Tasks

gulp.task('default', [ 'bower', 'minify' ]);

gulp.task('watch', function() {
	gulp.watch('./src/*.js', [ 'minify' ]);
});