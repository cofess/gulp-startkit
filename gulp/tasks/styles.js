"use strict";

var config       = require('../config')
var handleErrors = require('../util/handleErrors')

var path         = require('path')
var browserSync  = require('browser-sync')
var runSequence  = require('run-sequence')
var gulp         = require('gulp')
var gulpif       = require('gulp-if')
var less         = require("gulp-less")
var sass         = require('gulp-sass')
var sourcemaps   = require('gulp-sourcemaps')
var autoprefixer = require('gulp-autoprefixer')
var rename       = require('gulp-rename')
var cached       = require('gulp-cached')
var cleanCSS     = require('gulp-clean-css')
// var csso = require('gulp-csso')
var debug        = require('gulp-spy')
// var plumber = require('gulp-plumber')

if(!config.tasks.styles) return

var paths = {
  src: path.join(config.root.src, config.tasks.styles.src, '/**/*.{' + config.tasks.styles.extensions + '}'),
  lessSrc: path.join(config.root.src, config.tasks.styles.src, config.tasks.styles.less.src, '/**/*.{' + config.tasks.styles.less.extensions + '}'),
  sassSrc: path.join(config.root.src, config.tasks.styles.src, config.tasks.styles.sass.src, '/**/*.{' + config.tasks.styles.sass.extensions + '}'),
  dest: path.join(config.root.dest, config.tasks.styles.dest)
}

var lessTask = function () {
  // console.log(paths.lessSrc);
  return gulp.src(paths.lessSrc)
    .pipe(debug()) //.pipe(debug({prefix: 'Debug:'}))
    .pipe(cached('lessCached'))        // 只传递更改过的文件
    .pipe(gulpif(!global.production, sourcemaps.init()))
    .pipe(less(config.tasks.styles.less.compile))
    .on('error', handleErrors) // 交给notify处理错误
    .pipe(autoprefixer(config.tasks.styles.autoprefixer))
    .pipe(gulpif(!global.production, sourcemaps.write('./maps')))
    .pipe(gulp.dest(paths.dest))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(paths.dest))
    .pipe(gulpif(global.production, cleanCSS({debug: true})))
    .pipe(browserSync.stream())
}

var sassTask = function () {
  // console.log(paths.sassSrc);
  return gulp.src(paths.sassSrc)
    .pipe(debug()) //.pipe(debug({prefix: 'Debug:'}))
    .pipe(cached('sassCached'))        // 只传递更改过的文件
    .pipe(gulpif(!global.production, sourcemaps.init()))
    .pipe(sass(config.tasks.styles.sass.compile))
    .on('error', handleErrors) // 交给notify处理错误
    .pipe(autoprefixer(config.tasks.styles.autoprefixer))
    .pipe(gulpif(!global.production, sourcemaps.write('./maps')))
    .pipe(gulp.dest(paths.dest))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(paths.dest))
    .pipe(gulpif(global.production, cleanCSS({debug: true})))
    .pipe(browserSync.stream())
}

gulp.task('less', lessTask)

gulp.task('sass', sassTask)

gulp.task('styles',function (callback) {
    runSequence(    
        ['less', 'sass'], 
        callback
    );
});
