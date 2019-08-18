const path = require('path')
const gulp = require('gulp')
const changed = require('gulp-changed')
const config = require('../../config').static

if (!config) return

var paths = {
  src: [
    path.join(config.src, '/**'),
    path.join('!' + config.src, '/README.md')
  ],
  dest: config.dest
}

var staticTask = function() {
  return gulp.src(paths.src)
    .pipe(changed(paths.dest)) // Ignore unchanged files
    .pipe(gulp.dest(paths.dest))
}

gulp.task('copy:static', staticTask)
module.exports = staticTask
