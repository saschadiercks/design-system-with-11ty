const { DateTime } = require('luxon');

module.exports = {
	media: function(filename, page) {
		const path = page.inputPath.split('/')
		if (path.length && (path.includes('artikel') || path.includes('gadgets') || path.includes('projekte'))) {
			const subdir = path[path.length - 3]
			const postdir = path[path.length - 2]
			return `/assets/images/${subdir}/${postdir}/${filename}`
		}
		return filename
	},

	readableDate: function(date) {
		return DateTime.fromJSDate(date).toFormat('dd LLL yyyy')
	}
}
