"use strict";

var gulp = require("gulp")
var minifyHTML = require("gulp-htmlmin")

gulp.task("minify-html", ["compile"], function () {
    return gulp.src("./dist/**/*.html")
        .pipe(minifyHTML({
            comments: false,
            spare: true
        }))
        .pipe(gulp.dest("./dist"));
});
