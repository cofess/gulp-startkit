const gulp = require('gulp');
const changed = require('gulp-changed');
const config = require('../../config').fonts.production;

if (!config) return;

/**
 * Copy fonts to folder
 */
const copyfontsproductionTask = () => {
  return gulp.task('copy:fonts:production', function() {
    return gulp.src(config.src)
      .pipe(changed(config.dest)) // Ignore unchanged files
      .pipe(gulp.dest(config.dest));
  });
}

exports.copyfontsproduction = copyfontsproductionTask;
