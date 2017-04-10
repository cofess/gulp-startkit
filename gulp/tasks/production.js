"use strict";

var config          = require('../config')
var getEnabledTasks = require('../util/getEnabledTasks')

var runSequence     = require('run-sequence')
var gulp            = require('gulp')

var productionTask = function(cb) {
  global.production = true
  var tasks = getEnabledTasks('production')
  runSequence('clean', tasks.assetTasks, tasks.codeTasks, config.tasks.production.rev ? 'rev': false, 'size-report', 'static', cb)
}

gulp.task('production', productionTask)
module.exports = productionTask
