const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const config = require('../../config').optimize.html;

if (!config) return;

/**
 * Minimize HTML
 */
const optimizehtmlTask = () => {
  return gulp.task('optimize:html', function() {
    return gulp.src(config.src)
      .pipe(htmlmin(config.options))
      .pipe(gulp.dest(config.dest));
  });
}

exports.optimizehtml = optimizehtmlTask;
