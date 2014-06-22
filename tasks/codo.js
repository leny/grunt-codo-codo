
/*
 * grunt-codo-codo
 * https://github.com/Leny/grunt-codo-codo
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
 */
"use strict";
module.exports = function(grunt) {
  return grunt.registerMultiTask("codo", "Generate codo documentation.", function() {
    var oOptions;
    oOptions = this.options();
    return this.filesSrc.forEach(function(sFilePath) {
      return grunt.log.writeln("Please, now, do something.");
    });
  });
};
