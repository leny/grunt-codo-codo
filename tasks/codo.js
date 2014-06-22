
/*
 * grunt-codo-codo
 * https://github.com/Leny/grunt-codo-codo
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
 */
"use strict";
var lodash, path;

path = require("path");

lodash = require("lodash");

module.exports = function(grunt) {
  return grunt.registerMultiTask("codo", "Generate codo documentation.", function() {
    var aFolderSources, oOptions, _ref;
    oOptions = this.options({
      extension: "coffee",
      output: (_ref = this.data.dest) != null ? _ref : "./doc",
      theme: "default",
      name: "Codo",
      title: "Documentation",
      readme: "README.md",
      quiet: false,
      verbose: false,
      undocumented: false,
      closure: false,
      "private": false,
      analytics: false,
      extra: []
    });
    aFolderSources = [];
    this.filesSrc.filter(function(sFilePath) {
      return grunt.file.exists(sFilePath);
    }).forEach(function(sFilePath) {
      if (grunt.file.isDir(sFilePath)) {
        return aFolderSources.push(sFilePath);
      }
      if (grunt.file.isFile(sFilePath)) {
        return aFolderSources.push(path.dirname(sFilePath));
      }
    });
    aFolderSources = lodash.uniq(aFolderSources);
    console.log(oOptions);
    return grunt.log.writeln("Please, now, do something.");
  });
};
