const gulp = require('gulp');

/**
 * Start rsync task
 */
const deployTask = () => {
  return gulp.task('deploy', gulp.series('rsync'));
}

exports.deploy = deployTask;
