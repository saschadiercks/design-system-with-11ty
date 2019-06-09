/* #### Setting #### */
const config = './_config.json'
const gulp = require('gulp')
const del = require('del')

/* ################# */
/* ##### Tasks ##### */
/* ################# */
gulp.task('clean:build', function () {
	return del([
		config.dist + '/**'
	]);
});
