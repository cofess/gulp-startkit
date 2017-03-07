"use strict";

var config            = require('../config')
var pathToUrl         = require('../lib/pathToUrl')

var browserSync       = require('browser-sync')
var gulp              = require('gulp')

if(global.production) return

var browserSyncTask = function() {
  browserSync.init(config.tasks.browserSync)
}

gulp.task('browserSync', browserSyncTask)
module.exports = browserSyncTask
