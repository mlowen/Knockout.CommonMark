
var gulp = require('gulp');
var bower = require('gulp-bower');
var uglify = require('gulp-uglify');

gulp.task('install:bower', function() { bower(); });

gulp.task('minify:scripts', function() {
	gulp.src('./src/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./dist'));
});

// Tasks

gulp.task('default', [ 'install:bower', 'minify:scripts' ]);

gulp.task('watch', function() {
	gulp.watch('./src/*.js', [ 'minify:scripts' ]);
});