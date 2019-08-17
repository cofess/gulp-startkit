const gulp = require('gulp');

/**
 * Run task browsersync:production
 */
const publishTask = () => {
  return gulp.task('publish', gulp.series('browsersync:production'));
}

exports.publish = publishTask;
