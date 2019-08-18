const gulp = require('gulp')
const browsersync = require('browser-sync')
const config = require('../../config').browsersync.development

/**
 * Run the build task and start a server with BrowserSync
 */
const browsersyncTask = () => {
  browsersync(config);
}

// gulp.task('browsersync', gulp.series('build', browsersyncTask))
gulp.task('browsersync', browsersyncTask)
module.exports = browsersyncTask
