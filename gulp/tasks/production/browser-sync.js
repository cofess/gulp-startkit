const gulp = require('gulp')
const browsersync = require('browser-sync')
const config = require('../../config').browsersync.production

/**
 * Start a server and watch changes with BrowserSync
 */
const browsersyncproductionTask = () => {
  browsersync(config);
}

// gulp.task('browsersync:production', gulp.series('build:production', browsersyncproductionTask))
gulp.task('browsersync:production', browsersyncproductionTask)
module.exports = browsersyncproductionTask
