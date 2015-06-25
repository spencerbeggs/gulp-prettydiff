"use strict";
var gutil = require("gulp-util");
var prettydiff = require("prettydiff");
var clone = require("lodash.clone");
var map = require("map-stream");
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
	return map(function(file, cb) {
		if (file.isStream()) {
			return cb(new PluginError(PLUGIN_NAME, "Streams are not supported!"));
		}
		if (file.isBuffer()) {
			var config = clone(options);
			config.source = file.contents.toString();
			file.contents = new Buffer(prettydiff.api(config)[0]);
		}
		cb(null, file);
	});
};
