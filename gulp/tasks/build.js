"use strict";
var getEnabledTasks = require('../util/getEnabledTasks')

var runSequence     = require('run-sequence')
var gulp            = require('gulp')

// var defaultTask = function(cb) {
//   var tasks = getEnabledTasks('watch')
//   runSequence('clean', tasks.assetTasks, tasks.codeTasks, 'static', 'watch', cb)
// }

gulp.task("build", ["static", "font", "image", "styles", "script", "html"]);

gulp.task("default", function(done) {
    process.env.GSD_PUBLISHED = "true";
    runSequence("build", done);
});
