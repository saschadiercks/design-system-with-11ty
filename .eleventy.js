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

	// sort collections alphabetically
	eleventyConfig.addCollection("elements", function(collection) {
		collection_new = collection.getFilteredByGlob("**/4-elements/*/*.*")
		return collection_new.sort(function(a, b) {
			return a.inputPath.localeCompare(b.inputPath)
		  });
	});

	eleventyConfig.addCollection("components", function(collection) {
		collection_new = collection.getFilteredByGlob("**/6-components/*/*.*")
		return collection_new.sort(function(a, b) {
			return a.inputPath.localeCompare(b.inputPath)
		  });
	});

	eleventyConfig.addCollection("objects", function(collection) {
		collection_new = collection.getFilteredByGlob("**/5-objects/*/*.*")
		return collection_new.sort(function(a, b) {
			return a.inputPath.localeCompare(b.inputPath)
		  });
	});

	eleventyConfig.addCollection("utilities", function(collection) {
		collection_new = collection.getFilteredByGlob("**/7-utilities/*/*.*")
		return collection_new.sort(function(a, b) {
			return a.inputPath.localeCompare(b.inputPath)
		  });
	});

	// Layouts
	eleventyConfig.addLayoutAlias('base',			'layouts/base.njk')
	eleventyConfig.addLayoutAlias('home',			'layouts/home.njk')
	eleventyConfig.addLayoutAlias('components',		'layouts/components.njk')
	eleventyConfig.addLayoutAlias('elements',		'layouts/elements.njk')
	eleventyConfig.addLayoutAlias('objects',		'layouts/objects.njk')
	eleventyConfig.addLayoutAlias('utilities',		'layouts/utilities.njk')

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
