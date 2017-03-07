"use strict";

var gulp = require("gulp"),
    runSequence = require("run-sequence");

//监听less文件
gulp.task('watch:less', function () {
  gulp.watch('./less/**/*.less', ['less']);
});

//监听sass文件
gulp.task('watch:sass', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('watch', function () {
  var watcher = gulp.watch(scriptsGlob, ['scripts']); // 监视与 scripts 任务中同样的文件
  watcher.on('change', function (event) {
    if (event.type === 'deleted') {                   // 如果一个文件被删除了，则将其忘记
      delete cached.caches.scripts[event.path];       // gulp-cached 的删除 api
      remember.forget('scripts', event.path);         // gulp-remember 的删除 api
    }
  });
});

