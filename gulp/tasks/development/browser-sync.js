const gulp = require('gulp');
const browsersync = require('browser-sync');
const config = require('../../config').browsersync.development;

/**
 * Run the build task and start a server with BrowserSync
 */
const browsersyncTask = () => {
  return gulp.task('browsersync', gulp.series('build'), function() {
    browsersync(config);
  });
}

exports.browsersync = browsersyncTask;
