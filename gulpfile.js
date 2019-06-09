/* #### Setting #### */
require('require-dir')('./_tasks')
const gulp = require('gulp')

/* ################# */
/* ##### Tasks ##### */
/* ################# */

// --- group tasks ----
gulp.task('clean', gulp.series('clean:build'));
gulp.task('copy', gulp.series('copy:images', 'copy:content', 'copy:root'));
gulp.task('lint', gulp.series('lint:css'));
gulp.task('scripts', gulp.series('scripts:build'));
gulp.task('styles', gulp.series('lint:css', 'compile:css'));

// --- run tasks ----
gulp.task('serve', gulp.series('clean', 'styles', 'scripts','svgSprite' , 'copy', 'eleventy:serve'));
gulp.task('update', gulp.series('styles', 'scripts','svgSprite' , 'copy'));
gulp.task('build', gulp.series('clean', 'styles', 'scripts', 'svgSprite', 'copy', 'eleventy:build', 'imagemin', 'minify'));
