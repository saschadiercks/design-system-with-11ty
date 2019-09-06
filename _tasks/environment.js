/* #### Setting #### */
const config = require('./_config.json')
const gulp = require('gulp')

/* ################# */
/* ##### Tasks ##### */
/* ################# */
gulp.task('set-dev-node-env', function() {
	return Promise.resolve(process.env.NODE_ENV = config.envDevelopment);
});

gulp.task('set-prod-node-env', function() {
	return Promise.resolve(process.env.NODE_ENV = config.envProduction);
});
