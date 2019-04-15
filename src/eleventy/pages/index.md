---
layout: home
tags: nav
navtitle: Home
permalink: index.html
description: SDI Design-System as used on saschadiercks.de
keywords: Frontend, SASS, CSS, HTML, Gulp, Design System, Pattern Library
date: 2019-01-01
---

<div class="sdi-hero sdi-full-width">
	<div class="sdi-container sdi-center">
		<h1 class="sdi-hero__title">This is a design system documentation powered by <a href="https://github.com/11ty/eleventy">eleventy</a></h1>
		<p class="sdi-hero__text">It is structured using <a href="https://speakerdeck.com/dafed/managing-css-projects-with-itcss">ITCSS</a> and uses <a href="http://getbem.com/">BEM</a> for the styling.</p>
		<a class="sdi-button" href="https://github.com/saschadiercks/design-system-with-11ty">View on github</a>
		<a class="sdi-button sdi-button--secondary" href="https://saschadiercks.de">View it in action</a>
	</div>
</div>

<h2 class="sdi-center">Jump directly to...</h2>

<div class="sdi-layout">
	<div class="sdi-layout__item sdi-layout__item--25">
		<div class="sdi-card">
			<h2 class="h3 sdi-card__header">
				Elements
			</h2>
			<p class="sdi-card__main">
				Styling of elements like links, headings and so on.
			</p>
			<div class="sdi-card__footer">
				<a href="/elements" class="sdi-card__button sdi-button">show elements</a>
			</div>
		</div>
	</div>
	<div class="sdi-layout__item sdi-layout__item--25">
		<div class="sdi-card">
			<h2 class="h3 sdi-card__header">
				Objects
			</h2>
			<p class="sdi-card__main">
				Grids, Wrappers, UI-List are defined here
			</p>
			<div class="sdi-card__footer">
				<a href="/objects" class="sdi-card__button sdi-button">show objects</a>
			</div>
		</div>
	</div>
	<div class="sdi-layout__item sdi-layout__item--25">
		<div class="sdi-card">
			<h2 class="h3 sdi-card__header">
				Components
			</h2>
			<p class="sdi-card__main">
				The builiding blocks of your site like buttons, cards...
			</p>
			<div class="sdi-card__footer">
				<a href="/components" class="sdi-card__button sdi-button">show components</a>
			</div>
		</div>
	</div>
	<div class="sdi-layout__item sdi-layout__item--25">
		<div class="sdi-card">
			<h2 class="h3 sdi-card__header">
				Trumps
			</h2>
			<p class="sdi-card__main">
				Classes like full-width, hidden and other helpers
			</p>
			<div class="sdi-card__footer">
				<a href="/trumps" class="sdi-card__button sdi-button">show trumps</a>
			</div>
		</div>
	</div>
</div>

<hr/>

<!-- README starts here -->

## The Story
Some time ago I decided to redesign my personal website and remove things like wordpress.
Since I'm aobsessed with speed and optimization while enabling maximum flexibility with my code I decided to...
- use a static site generator
- write my own framework and not use things like bootstrap

Since I'm following [Zach Leatherman on twitter](https://twitter.com/zachleat) I heard about him developing [eleventy](https://twitter.com/eleven_ty).
After my site was done I decided to use eleventy as a documentation generator for my code.

If you're interested in Pattern Libraries or Design Systems like me, you could use this repository to build your own pattern lib. Just fork it and use it as a starting point and extend it to adopt your needs.

## Techniques
You might notice, that I'm using [ITCSS](https://speakerdeck.com/dafed/managing-css-projects-with-itcss) and [BEM](http://getbem.com/) here.
Currently there's no JS here, but that might change. My goal is to avoid frameworks as much as possible, so jQuery might not be used here.

## HOW TO
The only things you need to edit are the contents in the folder `src/eleventy/pages`

Opening this folder, you might notice, there are folders using the ITCSS-Names (prefixed with numbers to reflect the hierarchy).
- 1-settings (does not exist)
- 2-tools (does not exist)
- 3-generic (does not exist)
- 4-elements
- 5-objects
- 6-components
- 7-trumps
- themes (not ITCSS but used to edit some styles for the documentation)

In any of these folders (except "themes"), there are the files needed for the documentation.
- code.html
	- used to generate the previews and code-snippets
- description.md
	- add some description to your code

All content in these folders are automatically grouped on one page.

The sidebar is dynamically filled with links which link to the equivalent parts on the page (using IDs).
Names in the sidebare come from the equivalent directory-name so no Front Matter data is used here.
Keep that in mind, when choosing names.

### Prefixes
The CSS is prefixed so we can mix it with other frameworks and identify the classes later on. You can change the pprefix in `src/assets/scss/1-settings/variables`. But keep in mind, that you need to change the class-names in the html too. Search for `sdi-`and replace it with a name you like best.

## Gulp
I'm using gulp as a task runner so you need node.js and gulp.
1. just install [node.js](https://nodejs.org/en/)
2. and run `npm install` in the project directory

Here's a list of available tasks
- `gulp serve` runs eleventy and starts the watcher
- `gulp update` lints and recompiles CSS & JS. Calls the copy-function too
- `gulp build` runs eleventy and all build tasks without starting it
- `gulp copy` to copy required files (normally not required to run manually)
- `gulp lint`lints your scss using stylelint
- `gulp build:css` rebuilds the CSS

## Code Highlighting
We're using [prism.js](https://github.com/PrismJS/prism) to highlight the code. The nesseccary files are included in this repository. If you want to change the styling head to [https://prismjs.com/](https://prismjs.com/) and download the files you want. After that place them in `src/assets/3rdparty/prism` and run `gulp build`
