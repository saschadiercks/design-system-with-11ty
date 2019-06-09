/* #### Setting #### */
const config = require('./_config.json')
const gulp = require('gulp')
const svgSprite = require('gulp-svg-sprite')

var configSVG = {
	mode: {
		inline: true,
		symbol: {
			dest: '.',
			sprite: 'icon-sprite.svg',
			example: false
		}
	},
	shape: {
		transform: ['svgo'],
		id: {
			generator: 'icon-%s'
		}
	},
	svg: {
		xmlDeclaration: false,
		doctypeDeclaration: false
	}
}

/* ################# */
/* ##### Tasks ##### */
/* ################# */
gulp.task('svgSprite', function () {
	return gulp.src(config.assetSrc + '/images/svg/*.svg')
		.pipe(svgSprite(configSVG))
		.pipe(gulp.dest(config.assetDist + '/images'));
});

