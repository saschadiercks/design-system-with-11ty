/* #### Setting #### */
const config = require('./_config.json')
const gulp = require('gulp')
const htmlmin = require('gulp-html-minifier')

/* ################# */
/* ##### Tasks ##### */
/* ################# */
gulp.task('minify', () => {
	return gulp.src(config.dist + '/**/*.html')
	.pipe(htmlmin({
		collapseWhitespace: true,
		useShortDoctype: true,
		removeComments: true
	}))
	.pipe(gulp.dest(config.dist));
});

