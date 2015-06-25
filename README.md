# Gulp Pretty Diff

This plugin provides a simple interface for Gulp to transform files with [Pretty Diff](http://prettydiff.com/). You can pass [any option supported by the Pretty Diff API](http://prettydiff.com/documentation.xhtml#function_properties) as a property to the options object, except for `source` which is automatically converted from the stream into a UTF-8 string for you.

```js
var gulp = require("gulp");
var gulpPrettyDiff = require("gulp-prettydiff");

gulp.src("./**/*.css")
    .pipe(gulpPrettyDiff({
        lang: "css",
        mode: "beautify"
    }))
    .pipe(gulp.dest("./"))
```

NOTE: Pretty Diff itself does not support streaming. This plugin just consumes a Vinyl stream, passes its file objects through Pretty Diff and then returns a stream.