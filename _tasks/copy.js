/* #### Setting #### */
const config = require('./_config.json')
const gulp = require('gulp')


/* ################# */
/* ##### Tasks ##### */
/* ################# */
gulp.task('copy:content', function () {
	return gulp.src([
		config.assetSrc + '/3rdparty/**/*'])
	.pipe(gulp.dest(config.assetDist + '/3rdparty'));
});

gulp.task('copy:images', function () {
	return gulp.src([
		config.assetSrc + '/images/**/*'])
	.pipe(gulp.dest(config.assetDist + '/images'));
});

gulp.task('copy:root', function () {
	return gulp.src(config.src + '/*.*', { dot: true })
	.pipe(gulp.dest(config.dist + '/'));
});

gulp.task('copy:SCSSto11ty', function () {
	return gulp.src([
		config.assetSrc + '/scss/**/*'])
	.pipe(gulp.dest(config.src + '/eleventy/pages'));
});
