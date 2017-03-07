"use strict";

var config       = require('../config')

var path         = require('path')
var gulp         = require('gulp')
var cached       = require('gulp-cached')
var changed      = require('gulp-changed')
var debug        = require('gulp-spy')


var paths = {
  src: [
    path.join(config.root.src, config.tasks.static.src, '/**'),
    path.join('!' + config.root.src, config.tasks.static.src, '/README.md')
  ],
  dest: path.join(config.root.dest, config.tasks.static.dest)
}

var staticTask = function() {
  return gulp.src(paths.src)
  	.pipe(debug({prefix: 'Debug:'}))
    .pipe(changed(paths.dest)) // Ignore unchanged files
    .pipe(gulp.dest(paths.dest))
}

gulp.task('static', staticTask)
module.exports = staticTask
