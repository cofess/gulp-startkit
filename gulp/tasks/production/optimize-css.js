const gulp = require('gulp');
const size = require('gulp-size');
const config = require('../../config').optimize.css;

if (!config) return;

/**
 * Copy CSS files
 */
const optimizecssTask = () => {
  return gulp.task('optimize:css', function() {
    return gulp.src(config.src)
      .pipe(gulp.dest(config.dest))
      .pipe(size());
  });
}

exports.optimizecss = optimizecssTask;
