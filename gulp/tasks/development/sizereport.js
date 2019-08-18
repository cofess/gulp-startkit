const gulp = require('gulp')
const sizereport = require('gulp-sizereport')
const config = require('../../config').sizereport

if (!config) return

const sizereportTask = () => {
  return gulp.src(config.src)
    .pipe(sizereport(config.options));
}

exports.sizereport = sizereportTask;
