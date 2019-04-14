module.exports = function(eleventyConfig) {

	eleventyConfig.addFilter("get_suffix", function(page) {
		const path = page.inputPath.split('.')
		//return path[path.length - 2]
		return path[path.length - 1]
	});

	eleventyConfig.addFilter("get_filename", function(page) {
		const path = page.inputPath.split('/')
		return path[path.length - 1]
	});

	eleventyConfig.addFilter("get_parentdirectory", function(page) {
		const path = page.inputPath.split('/')
		return path[path.length - 2]
	});

	eleventyConfig.addFilter("combine_path", function(page) {
		const path = page.inputPath.split('/')
		const file_length = path[path.length - 1].length
		const path_length = page.inputPath.length - file_length
		const full_path = page.inputPath.substr(0, path_length) + "description.md"
		return full_path;
	});

	// Layouts
	eleventyConfig.addLayoutAlias('base',			'layouts/base.njk')
	eleventyConfig.addLayoutAlias('home',			'layouts/home.njk')
	eleventyConfig.addLayoutAlias('components',		'layouts/components.njk')
	eleventyConfig.addLayoutAlias('elements',		'layouts/elements.njk')
	eleventyConfig.addLayoutAlias('objects',		'layouts/objects.njk')
	eleventyConfig.addLayoutAlias('trumps',			'layouts/trumps.njk')

	// Base eleventyConfig
	return {
		dir: {
			input: './src/eleventy',
			output: 'htdocs',
			includes: 'includes',	// ⚠️ This value is relative to your input directory.
			data: 'data'			// ⚠️ This value is relative to your input directory.
		},
		templateFormats: ['njk', 'md', 'html'],
		htmlTemplateEngine: 'njk',
		markdownTemplateEngine: 'njk',
		passthroughFileCopy: true
	}
};
