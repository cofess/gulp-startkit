var gulp           = require('gulp')
var runSequence    = require('run-sequence')

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build', function(callback) {
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
