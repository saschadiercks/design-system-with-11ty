/* #### Setting #### */
const gulp = require('gulp')

require('require-dir')('./_tasks')


/* ############### */
/* #### Tasks #### */
/* ############### */

// Dependencies
const gulp = require('gulp');
const shell = require('gulp-shell');
const sass = require('gulp-sass');
const gulpStylelint = require('gulp-stylelint');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-html-minifier');
const del = require('del');
const svgSprite = require('gulp-svg-sprite')

var config = {
	  src: 'src',
	 dist: 'htdocs',
 assetSrc: 'src/assets',
assetDist: 'htdocs/assets',
   imgExt: '{jpg,png,svg}'
}

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

// Place Code for tasks here
// ---- run eleventy ----
gulp.task('eleventyGenerate', shell.task('eleventy'));
gulp.task('eleventyServe', shell.task('eleventy --serve'));

// ---- clean ----
gulp.task('clean', function () {
	return del([
		config.dist + '/**'
	]);
});

// ---- copy content ----
gulp.task('copyContent', function () {
	return gulp.src([
		config.assetSrc + '/3rdparty/**/*'])
	.pipe(gulp.dest(config.assetDist + '/3rdparty'));
});

gulp.task('copyImages', function () {
	return gulp.src([
		config.assetSrc + '/images/**/*'])
	.pipe(gulp.dest(config.assetDist + '/images'));
});

gulp.task('copyRoot', function () {
	return gulp.src(config.src + '/*.*', { dot: true })
	.pipe(gulp.dest(config.dist));
});

gulp.task('copySCSSto11ty', function () {
	return gulp.src([
		config.assetSrc + '/scss/**/*'])
	.pipe(gulp.dest(config.src + '/eleventy/pages'));
});

// ---- images ---
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

gulp.task('svgSprite', function () {
	return gulp.src(config.assetSrc + '/images/svg/*.svg')
		.pipe(svgSprite(configSVG))
		.pipe(gulp.dest(config.assetDist + '/images'));
});

// ---- SCSS  ----

	gulp.task('compile:css', function () {
		return gulp.src(config.assetSrc + '/scss/*.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions','>5%'],
			cascade: false
		}))
		.pipe(gulp.dest(config.assetDist + '/css'));
	});

	// lint
	gulp.task('lint-css', function lintCssTask() {
		return gulp.src(config.assetSrc + '/scss/**/*.scss')
		.pipe(gulpStylelint({
			reporters: [
				{ formatter: 'string', console: true },
			]
		}));
	});

// ---- Javascript ----

	// build
	gulp.task('compile:js', function () {
		var options = {
			mangle: 'true'
		};

		return gulp.src(config.assetSrc + '/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest(config.assetDist + '/js'));
	});

// ---- HTML ----
gulp.task('minify', () => {
	return gulp.src(config.dist + '/**/*.html')
	.pipe(htmlmin({
		collapseWhitespace: true,
		useShortDoctype: true,
		removeComments: true
	}))
	.pipe(gulp.dest(config.dist));
});


// --- build ----
gulp.task('copy', gulp.series('copyImages', 'copyContent', 'copyRoot'));
gulp.task('lint', gulp.series('lint-css'));
gulp.task('build:css', gulp.series('clean', 'lint-css', 'compile:css'));
gulp.task('serve', gulp.series('clean', 'lint-css', 'compile:css', 'compile:js','svgSprite' , 'copy', 'eleventyServe'));
gulp.task('update', gulp.series('lint-css', 'compile:css', 'compile:js','svgSprite' , 'copy'));
gulp.task('build', gulp.series('clean', 'lint-css', 'compile:css', 'compile:js', 'svgSprite', 'copy', 'imagemin', 'eleventyGenerate', 'minify'));
