const gulp = require('gulp')
const less = require('gulp-less')
const sass = require('gulp-sass')
const minify = require('gulp-clean-css')
const plumber = require('gulp-plumber')
const sourcemap = require('gulp-sourcemaps')
const gutil = require('gulp-util')
const browsersync = require('browser-sync')
const autoprefixer = require('gulp-autoprefixer')
const gulpif = require('gulp-if')
const gcmq = require('gulp-group-css-media-queries')
const config = require('../../config').styles

if (!config) return

function onError(err) {
  gutil.beep();
  console.log(err);
  this.emit('end');
}

const stylesTask = () => {
  return gulp.src(config.src)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(gulpif(config.sourcemap, sourcemap.init()))
    // .pipe(sass(config.compile))
    .pipe(gulpif(config.type == 'less', less(config.less.compile)))
    .pipe(gulpif(config.type == 'sass', sass(config.sass.compile)))
    .pipe(autoprefixer(config.options.autoprefixer))
    .pipe(minify(config.options.clean))
    .pipe(gcmq())
    .pipe(gulpif(config.sourcemap, sourcemap.write('.')))
    .pipe(gulp.dest(config.dest));
}

gulp.task('styles', stylesTask)
module.exports = stylesTask
