/* #### Setting #### */
const config = './_config.json'
const gulp = require('gulp')
const shell = require('gulp-shell')

/* ################# */
/* ##### Tasks ##### */
/* ################# */
gulp.task('eleventy:build', shell.task('eleventy'));
gulp.task('eleventy:serve', shell.task('eleventy --serve'));
