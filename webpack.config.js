/* #### Setting #### */
const config = require('./_tasks/_config.json')

/* ################# */
/* ##### Tasks ##### */
/* ################# */
module.exports = {
	entry: {
		site: [
			`./${config.assetSrc}/js/site.js`,
			`./${config.assetSrc}/3rdparty/prism/prism.js`
		]
	},
	output: {
		filename: `./${config.assetDist}/js/[name].js`
	}
};
