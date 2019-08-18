const gulp = require('gulp');
const runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
// gulp.task('build:production', function(callback) {
//   runSequence('delete', 'jekyll:production',
//   [
//     'styles',
//     'js',
//     'images',
//     'copy:fonts'
//   ],
//   'base64',
//   [
//     'optimize:css',
//     'optimize:js',
//     'optimize:images',
//     'optimize:html',
//     'copy:fonts:production'
//   ],
//   'rev',
//   'rev:collect',
//   [
//     'webp',
//     'gzip'
//   ],
//   callback);
// });

const buildproductionTask = () => {
  return gulp.task('build:production', function(callback) {
    runSequence('delete', 'html:production', gulp.series(
        'styles',
        'js',
        'jsconcat',
        'images',
        'copy:fonts'
      ),
      'base64', gulp.series(
        'optimize:css',
        'optimize:js',
        'optimize:images',
        'optimize:html',
        'copy:fonts:production'
      ),
      'rev',
      'rev:collect', gulp.series(
        // 'webp', //有点小问题，依赖系统WIC图像处理组件
        'gzip'
      ),
      callback);
  });
}

exports.buildproduction = buildproductionTask;
