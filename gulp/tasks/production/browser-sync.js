const gulp = require('gulp');
const browsersync = require('browser-sync');
const config = require('../../config').browsersync.production;

/**
 * Start a server and watch changes with BrowserSync
 */
const browsersyncproductionTask = () => {
  return gulp.task('browsersync:production', gulp.series('build:production', function() {
    browsersync(config);
  }));
}

exports.browsersyncproduction = browsersyncproductionTask;
