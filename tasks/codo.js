
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
    var aFolderSources, oOptions;
    oOptions = this.options();
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
    console.log(aFolderSources);
    aFolderSources = lodash.uniq(aFolderSources);
    console.log(aFolderSources);
    return grunt.log.writeln("Please, now, do something.");
  });
};
