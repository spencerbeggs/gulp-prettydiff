# Gulp Pretty Diff

This plugin provides a simple interface for Gulp to transform files with [Pretty Diff](http://prettydiff.com/). You can pass [any option supported by the Pretty Diff API](http://prettydiff.com/documentation.xhtml#function_properties) as a property to the options object:

```
var gulp = require("gulp");
var gulpPrettyDiff = require("gulp-prettydiff");

gulp.src("./**/*.css")
    .pipe(gulpPrettyDiff({
        lang: "css",
        mode: "beautify"
    }))
    .pipe(gulp.dest("./"))
```

It assumes that you want to perform a transform on a file's contents as a UTF-8 string, and implicitly sets the `source` property for you. You can override that behavior by explicity setting the `source` property.

NOTE: Pretty Diff itself does not support streaming. This plugin just consumes a Vinyl stream, passes its file objects through Pretty Diff and then returns a stream.