const gulp = require('gulp')
const runSequence = require('run-sequence')

/**
 * Run all tasks needed for a build in defined order
 */
const buildproductionTask = () => {
  gulp.series(
    'delete',
    'html:production',
    gulp.parallel('styles', 'js', 'jsconcat', 'images', 'copy:fonts'),
    'base64',
    gulp.parallel('optimize:css', 'optimize:js', 'optimize:images', 'optimize:html', 'copy:fonts:production'),
    'rev',
    'rev:collect',
    // 'webp', //有点小问题，依赖系统WIC图像处理组件
    'gzip'
  );
}

gulp.task('build:production', buildproductionTask)
module.exports = buildproductionTask
