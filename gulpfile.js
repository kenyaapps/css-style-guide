var gulp = require('gulp'),
	less = require('gulp-less'),
	path = require('path'),
	watch = require('gulp-watch');


gulp.task('less', function () {
  gulp.src('assets/less/style.less')
    .pipe(less()).on('error',function(e){ console.log(e); })
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function() {
  gulp.watch('assets/less*.less', ['less']);
});

gulp.task('default', ['watch'], function() {
  console.log('default run')
});