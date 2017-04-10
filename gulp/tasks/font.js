"use strict";

var config       = require('../config')

var path         = require('path')
var browserSync  = require('browser-sync')
var cached       = require('gulp-cached')
var gulp         = require('gulp')
var debug        = require('gulp-spy')


if(!config.tasks.font) return

var paths = {
  src: path.join(config.root.src, config.tasks.font.src, '/**/*.{' + config.tasks.font.extensions + '}'),
  dest: path.join(config.root.dest, config.tasks.font.dest)
}

var fontsTask = function() {
  return gulp.src([paths.src, '*!README.md'])
  	.pipe(debug({
  		// timestamp: false,
  		// 'zero-format': 'No files matched',
  		// 'one-format': 'Total: ' + chalk.cyan('1 file'),
  		// 'many-format': 'Total: ' + chalk.cyan('%s files')
  		// format: '>' + chalk.yellow('%s')
  	})) //.pipe(debug({prefix: 'Debug:'}))
    .pipe(cached('fontsCached')) // Ignore unchanged files
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream())
}

gulp.task('font', fontsTask)
module.exports = fontsTask
