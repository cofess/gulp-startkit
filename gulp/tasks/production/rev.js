const gulp = require('gulp');
const rev = require('gulp-rev');
const revNapkin = require('gulp-rev-napkin');
const config = require('../../config').rev;

if (!config) return;

/**
 * rev all asset files and
 * write a manifest file
 */
const revTask = () => {
  return gulp.task('rev', function() {
    return gulp.src(config.src.assets, { base: config.src.base })
      .pipe(gulp.dest(config.dest.assets))
      .pipe(rev())
      .pipe(gulp.dest(config.dest.assets))
      .pipe(revNapkin())
      .pipe(rev.manifest({ path: config.dest.manifest.name }))
      .pipe(gulp.dest(config.dest.manifest.path));
  });
}

exports.rev = revTask;
