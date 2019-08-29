const gulp = require('gulp')

/**
 * Run all tasks needed for a build in defined order
 */
// const buildTask = () => {
//   gulp.series(
//     'delete',
//     gulp.parallel('copy:static', 'copy:fonts', 'styles', 'js', 'jsconcat', 'images', 'html'),
//     gulp.parallel('cssmin', 'jsmin', 'manifest'),
//     'base64'
//   );
// }

// gulp.task('build', buildTask)
// module.exports = buildTask
