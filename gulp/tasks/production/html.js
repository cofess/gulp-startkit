"use strict";

const fs = require('fs');
const path = require('path');
const browserSync = require('browser-sync');
const gulp = require('gulp');
const data = require('gulp-data');
const render = require('gulp-nunjucks-render');
const config = require('../../config').html;

if (!config) return;

var exclude = path.normalize('!**/{' + config.excludeFolders.join(',') + '}/**');

var paths = {
  src: [path.join(config.src, '/**/*.{' + config.extensions + '}'), exclude],
  dest: config.production.dest
}

var getData = function(file) {
  var dataPath = path.resolve(config.src, config.dataFile)
  return JSON.parse(fs.readFileSync(dataPath, 'utf8'))
}

const htmlproductionTask = () => {
  return gulp.src(paths.src)
    .pipe(data(getData))
    .pipe(render({
      path: config.src,
      envOptions: {
        watch: false
      }
    }))
    .pipe(gulp.dest(paths.dest))
    .on('end', browserSync.reload)
}

exports.htmlproduction = htmlproductionTask;
