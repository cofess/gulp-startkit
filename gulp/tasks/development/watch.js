const gulp = require('gulp')
const config = require('../../config').watch

/**
 * Start browsersync task and then watch files for changes
 */
const watchTask = () => {
  // gulp.watch(config.jekyll,  gulp.series('jekyll-rebuild'));
  gulp.watch(config.styles, gulp.series('styles', 'csslint', 'cssmin'));
  gulp.watch(config.scripts, gulp.series('js', 'jshint', 'jsmin'));
  // gulp.watch(config.scripts, gulp.series('js', 'jsconcat', 'jshint', 'jsmin'));
  gulp.watch(config.images, gulp.series('images'));
  gulp.watch(config.fonts, gulp.series('copy:fonts'));
  gulp.watch(config.static, gulp.series('copy:static'));
  gulp.watch(config.sprites, gulp.series('sprites'));
  gulp.watch(config.html, gulp.series('html'));
}

// gulp.task('watch', gulp.series('browsersync', watchTask))
// gulp.task('watch', watchTask)
// module.exports = watchTask
