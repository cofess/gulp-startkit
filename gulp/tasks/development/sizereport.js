const gulp = require('gulp')
const sizereport = require('gulp-sizereport')
const config = require('../../config').sizereport

if (!config) return

const sizereportTask = () => {
  gulp.task('sizereport', function() {
    return gulp.src(config.src)
      .pipe(sizereport(config.options));
  });
}

gulp.task('sizereport', sizereportTask)
module.exports = sizereportTask
