'use strict';

import gulp from 'gulp';
const smartgrid = require('smart-grid');

gulp.task('smart-grid', (cb) => {
  smartgrid('./src/styles/vendor/import/', {
    outputStyle: 'scss',
    filename: '_smart-grid',
    columns: 12, // number of grid columns
    offset: '30px', // gutter width - 30px
    container: {
      maxWidth: '1620px',
      fields: '30px', // side fields - 15px
    },
    breakPoints: {
      xs: {
        width: '480px', // 320px
      },
      sm: {
        width: '640px', // 576px
      },
      md: {
        width: '900px', // 768px
      },
      lg: {
        width: '1200px', // 992px
      },
      xl: {
        width: '1500px', // 1200px
      },
    },
  });
  cb();
});
