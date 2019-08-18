const gulp = require('gulp');
const stylelint = require('gulp-stylelint');
const config = require('../../config').csslint;

if (!config) return;

const csslintTask = () => {
  return gulp.src(config.src)
    .pipe(stylelint(config.options.reporter));
}

exports.csslint = csslintTask;
