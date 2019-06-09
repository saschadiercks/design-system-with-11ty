/* #### Setting #### */
const config = './_config.json'
const gulp = require('gulp')
const imagemin = require('gulp-imagemin')

/* ################# */
/* ##### Tasks ##### */
/* ################# */
gulp.task('imagemin', function () {
	return gulp.src(config.assetDist + '/**/*.' + config.imgExt)
		.pipe(imagemin([
			imagemin.jpegtran({progressive: true}),
			imagemin.optipng({optimizationLevel: 5}),
			imagemin.svgo({
				plugins: [
					{removeViewBox: true},
					{cleanupIDs: false}
				]
			})
		]))
		.pipe(gulp.dest(config.assetDist));
});
