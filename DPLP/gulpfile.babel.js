
import gulp from 'gulp';

import './gulp/styles'
import './gulp/scripts'
import './gulp/browser-sync'
import './gulp/watch'

gulp.task('default', gulp.parallel('browser-sync', 'watch'));