const gulp = require('gulp');
const changed = require('gulp-changed');
const logger = require('gulp-spy');
const gulpif = require('gulp-if');
const debug = require('../../config').debug;
const config = require('../../config').fonts.development;

if (!config) return;

/**
 * Copy fonts to folder
 */
const copyfontsTask = () => {
  return gulp.src(config.src)
    .pipe(gulpif(debug.state, logger(debug.options)))
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.dest));
}

exports.copyfonts = copyfontsTask;
