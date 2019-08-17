const gulp = require('gulp');

const defaultTask = () => {
  return gulp.task('default', gulp.series('watch'));
}

exports.default = defaultTask;
