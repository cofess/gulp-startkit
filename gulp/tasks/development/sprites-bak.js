const gulp = require('gulp');
const spritesmith = require('gulp.spritesmith');
const config = require('../../config').sprites;

/**
 * Generate sprite and css file from PNGs
 */
const spritesTask = () => {
  return gulp.task('sprites', function() {

    var spriteData = gulp.src(config.src).pipe(spritesmith(config.options));

    spriteData.img
      .pipe(gulp.dest(config.dest.image));

    spriteData.css
      .pipe(gulp.dest(config.dest.css));
  });
}

exports.sprites = spritesTask;
