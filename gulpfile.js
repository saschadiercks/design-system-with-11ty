/* #### Setting #### */
const gulp = require('gulp')
require('require-dir')('./_tasks')

/* ################# */
/* ##### Tasks ##### */
/* ################# */
// --- set environment ----
gulp.task('production', gulp.series('set-prod-node-env'));
gulp.task('development', gulp.series('set-dev-node-env'));

// --- group tasks ----
gulp.task('clean', gulp.series('clean:build'));
gulp.task('copy', gulp.series('copy:images', 'copy:content', 'copy:root'));
gulp.task('lint', gulp.series('lint:css'));
gulp.task('scripts', gulp.series('scripts:build'));
gulp.task('styles', gulp.series('lint:css', 'compile:css'));

// --- run tasks ----
gulp.task('update', gulp.series('development', 'styles', 'scripts','svgSprite' , 'copy'));
gulp.task('build', gulp.series('production', 'clean', 'styles', 'scripts', 'svgSprite', 'copy', 'eleventy:build', 'imagemin', 'minify'));


// --- run application ----
gulp.task('serve', gulp.series('clean', 'styles', 'scripts','svgSprite' , 'copy', 'eleventy:serve'));
