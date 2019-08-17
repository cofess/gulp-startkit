const gulp = require('gulp');
const runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
const buildTask = () => {
  return gulp.task('build', function(callback) {
    runSequence('delete', gulp.series(
        'copy:static',
        'copy:fonts',
        'styles',
        'js',
        'jsconcat',
        'images',
        'html'
      ),
      gulp.series(
        'cssmin',
        'jsmin',
        'manifest'
      ),
      'base64',
      callback);
  });
}

exports.build = buildTask;
