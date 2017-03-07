"use strict";

var config       = require('../config')
var handleErrors = require('../lib/handleErrors')

var path         = require('path')
var browserSync  = require('browser-sync')

var gulp         = require('gulp')
var changed      = require('gulp-changed')
var imagemin     = require('gulp-imagemin')
var debug        = require('gulp-spy')

if(!config.tasks.images) return

var paths = {
  src: path.join(config.root.src, config.tasks.images.src, '/**/*.{' + config.tasks.images.extensions + '}'),
  dest: path.join(config.root.dest, config.tasks.images.dest)
}

var imageTask = function() {
  return gulp.src([paths.src, '*!README.md'])
  	.pipe(debug({prefix: 'Debug:'}))
    .pipe(changed(paths.dest)) // Ignore unchanged files
    .on('error', handleErrors)
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream())
}

var imageminTask = function() {
  return gulp.src([paths.src, '*!README.md'])
  	.pipe(debug({prefix: 'Debug:'}))
    .pipe(changed(paths.dest)) // Ignore unchanged files
    .pipe(imagemin()) // Optimize,貌似处理比较缓慢，待测试
    .on('error', handleErrors)
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream())
}

gulp.task('image', imageTask)
gulp.task('imagemin', imageminTask)
module.exports = imageTask
module.exports = imageminTask
