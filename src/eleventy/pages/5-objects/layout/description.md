`sdi-layout` is just a replacement for the typical grid-classes (`row` & `col`).
We're using `sdi-layout` because it's not a grid per se - although it can be used like one.
The grid-gap is applied to layout__item (columns) as padding.

(!) Some tools rely heavily on bootstrap-grids, so if we'd like to we could change the classnames to match bootstrap-classnames.
The classnames are defined in `1-settings/variables` but we should set them here `themes/1-settings/variables`!
