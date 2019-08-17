"use strict";

const path = require('path');
const gulp = require('gulp');
const changed = require('gulp-changed');
const config = require('../../config').static;

if (!config) return;

var paths = {
  src: [
    path.join(config.src, '/**'),
    path.join('!' + config.src, '/README.md')
  ],
  dest: config.dest
}

const copystaticTask = () => {
  return gulp.src(paths.src)
    .pipe(changed(paths.dest)) // Ignore unchanged files
    .pipe(gulp.dest(paths.dest))
}

exports.copystatic = copystaticTask;
