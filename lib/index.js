"use strict";
var through = require("through2");
var gutil = require("gulp-util");
var prettydiff = require("prettydiff");
var PluginError = gutil.PluginError;
var PLUGIN_NAME = "gulp-prettydiff";

/**
 * @module gulp-prettydiff
 * @description Transform Gulp streams with [Pretty Diff]{@link https://http://prettydiff.com}
 * @param {object} options - Task options
 * @return {stream}
 */
module.exports = function(options) {
	options = options || {};
	return through.obj(function(file, enc, cb) {
		if (file.isStream()) {
			this.emit("error", new PluginError(PLUGIN_NAME, "Streams are not supported!"));
			return cb();
		}
		if (file.isBuffer()) {
			options.source = options.source ? options.source : file.contents.toString();
			file.contents = new Buffer(prettydiff.api(options)[0]);
		}
		this.push(file);
		cb();
	});
};
