const gulp = require('gulp');
const base64 = require('gulp-base64');
const logger = require('gulp-spy');
const gulpif = require('gulp-if');
const debug = require('../../config').debug;
const config = require('../../config').base64;

if (!config) return;

/**
 * Replace urls in CSS fies with base64 encoded data
 */
const publishTask = () => {
  return gulp.task('base64', gulp.series('styles'), function() {
    return gulp.src(config.src)
      .pipe(gulpif(debug.state, logger(debug.options)))
      .pipe(base64(config.options))
      .pipe(gulp.dest(config.dest));
  });
}

exports.publish = publishTask;
