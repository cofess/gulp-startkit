"use strict";

var runSequence = require("run-sequence")
var gulp        = require("gulp")



// var defaultTask = function(cb) {
//   var tasks = getEnabledTasks('watch')
//   gulpSequence('clean', tasks.assetTasks, tasks.codeTasks, 'static', 'watch', cb)
// }

// gulp.task('default', defaultTask)
// module.exports = defaultTask

gulp.task("default", function(done) {
    process.env.GSD_PUBLISHED = "true";
    runSequence("build", done);
});
