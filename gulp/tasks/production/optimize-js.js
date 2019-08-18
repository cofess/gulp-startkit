const gulp = require('gulp');
const uglify = require('gulp-uglify');
const size = require('gulp-size');
const config = require('../../config').optimize.js;


if (!config) return;

/**
 * Copy and minimize JS files
 */
const optimizejsTask = () => {
  return gulp.task('optimize:js', function() {
    return gulp.src(config.src)
      .pipe(uglify(config.options))
      .pipe(gulp.dest(config.dest))
      .pipe(size());
  });
}

exports.optimizejs = optimizejsTask;
