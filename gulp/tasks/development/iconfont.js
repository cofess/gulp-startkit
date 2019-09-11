/**
 * 生成字体图标
 * https://blog.csdn.net/weixin_33979203/article/details/94672022
 */
var gulp = require('gulp');
var iconfont = require('gulp-iconfont');

var iconfontCss = require('gulp-iconfont-css');

// var template = require('gulp-template');
// var fs = require('fs');

// var icons = fs.readdirSync('app/_assets/icons');

// icons = icons.map(function(icon) {
//   return icon.replace(/\.\w+$/, '');
// });

var cssName = 'iconfont'; //生成的css名称
gulp.task('icon', function() {
  let dirname = 'app/_assets';
  return gulp.src([`${dirname}/icons/**/*.svg`])
    .pipe(
      iconfontCss({
        fontName: 'iconfont', // iconfont.css的font-family值
        path: `${dirname}/icons/iconfont.template.scss`, //css模版文件
        targetPath: `../../styles/iconfont/${cssName}.scss`, //css生成文件
        fontPath: '../fonts/' //iconfont.template.less文件中的fontPath
      })
    )
    .pipe(
      iconfont({
        fontName: 'iconfont',
        formats: ['svg', 'ttf', 'eot', 'woff', 'woff2'],
        normalize: true
      })
    )
    .pipe(gulp.dest(`${dirname}/fonts/${cssName}`)); //svg的字体文件存放位置
});

// gulp.task('iconExample', function() {
//   let dirname = 'app/_assets';
//   gulp.src(`${dirname}/icons/iconfont.template.html`) //样式例子文件
//     .pipe(template({ icons: icons, cssName: cssName }))
//     .pipe(gulp.dest(`${dirname}`)); //样式例子文件存放位置
// });

// gulp.task('iconfont', ['icon', 'iconExample']);
