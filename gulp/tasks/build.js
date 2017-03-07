"use strict";
var getEnabledTasks = require('../lib/getEnabledTasks')

var runSequence     = require('run-sequence')
var gulp            = require('gulp')

// var defaultTask = function(cb) {
//   var tasks = getEnabledTasks('watch')
//   runSequence('clean', tasks.assetTasks, tasks.codeTasks, 'static', 'watch', cb)
// }

gulp.task("build", ["concat-js", "image-min", "copy-assets", "minify-html"]);

gulp.task("default", function(done) {
    process.env.GSD_PUBLISHED = "true";
    runSequence("build", done);
});
