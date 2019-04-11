const filters = require('./src/eleventy/_eleventy/filters.js');

module.exports = function(config) {
	// Filters
	Object.keys(filters).forEach(filterName => {
		config.addFilter(filterName, filters[filterName])
	})

	config.addShortcode("icon", function(iconName) {
		const spriteUrl = '/assets/images/icon-sprite.svg'
		const iconId = '#icon-' + iconName
		const href = spriteUrl + iconId

		return `<svg class="sdi-icon sdi-icon--${iconName}" role="img" aria-hidden="true" width="24" height="24">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="${href}"></use>
				</svg>`
	});

	// Layouts
	config.addLayoutAlias('base',			'layouts/base.njk')
	config.addLayoutAlias('home',			'layouts/home.njk')

	// Base Config
	return {
		dir: {
			input: './src/eleventy',
			output: 'htdocs',
			includes: 'includes',	// ⚠️ This value is relative to your input directory.
			data: 'data'			// ⚠️ This value is relative to your input directory.
		},
		templateFormats: ['njk', 'md'],
		htmlTemplateEngine: 'njk',
		markdownTemplateEngine: 'njk',
		passthroughFileCopy: true
	}
};
