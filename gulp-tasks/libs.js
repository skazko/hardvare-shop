'use strict';

import { paths } from '../gulpfile.babel';
import gulp from 'gulp';
import debug from 'gulp-debug';

gulp.task('libs', () => {
  return gulp
    .src(paths.styles.lib)
    .pipe(gulp.dest(paths.styles.dist))
    .pipe(
      debug({
        title: 'Styles libs',
      })
    );
});
