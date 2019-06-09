/* #### Setting #### */
const config = require('./_config.json')
const gulp = require('gulp')
const uglify = require('gulp-uglify')

/* ################# */
/* ##### Tasks ##### */
/* ################# */
gulp.task('scripts:build', function () {
	var options = {
		mangle: 'true'
	};

	return gulp.src(config.assetSrc + '/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest(config.assetDist + '/js'));
});
