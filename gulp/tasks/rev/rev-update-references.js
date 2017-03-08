"use strict";

var config          = require('../../config')

var path            = require('path')
var gulp            = require('gulp')
var revReplace      = require('gulp-rev-replace')

// 2) Update asset references with reved filenames in compiled css + js
gulp.task('rev-update-references', function(){
  var manifest = gulp.src(path.join(config.root.dest, "rev-manifest.json"))

  return gulp.src(path.join(config.root.dest,'/**/**.{css,js}'))
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest(config.root.dest))
})
