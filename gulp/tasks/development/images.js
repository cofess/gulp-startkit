const gulp = require('gulp')
const changed = require('gulp-changed')
const config = require('../../config').images

if (!config) return

/**
 * Copy images to build folder
 * if not changed
 */
const imagesTask = () => {
  return gulp.src(config.src)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.dest));
}

exports.images = imagesTask;
