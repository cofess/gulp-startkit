"use strict";

var runSequence = require("run-sequence")
var gulp        = require("gulp")
var debug       = require('gulp-spy')

gulp.task("copy:static", function () {
    return gulp.src(["./src/favicon.ico", "./src/*.png"])
    	.pipe(debug())
        .pipe(gulp.dest("./dist"));
});

gulp.task("copy:fonts", function () {
    return gulp.src(["src/fonts/**/*"])
    	.pipe(debug())
        .pipe(gulp.dest("./dist/fonts"));
});

// copy
gulp.task('copy',function (callback) {
    runSequence(
        ["copy:assets", "copy:fonts"], 
        callback
    );
});

