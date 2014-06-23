
/*
 * grunt-codo-codo
 * https://github.com/Leny/grunt-codo-codo
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
 */
"use strict";
var CLITable, Codo, chalk, lodash, path;

path = require("path");

lodash = require("lodash");

chalk = require("chalk");

CLITable = require("cli-table");

Codo = require("./utils/command.js");

module.exports = function(grunt) {
  return grunt.registerMultiTask("codo", "Generate codo documentation.", function() {
    var aFolderSources, iPercent, oCodo, oData, oEntry, oOptions, oStats, oTable, sSection, _i, _len, _ref, _ref1, _results;
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
      stats: true,
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
    oCodo = new Codo(aFolderSources, oOptions);
    oCodo.generate();
    if (oOptions.stats) {
      oTable = new CLITable({
        head: ["", chalk.cyan("Documented"), chalk.cyan("Undocumented"), chalk.cyan("Total"), chalk.cyan("Percent")]
      });
      oStats = oCodo.getStats();
      oTable.push([chalk.cyan("files"), "", "", oStats.files, ""]);
      oTable.push([chalk.cyan("extras"), "", "", oStats.extras, ""]);
      oTable.push([chalk.cyan("classes"), oStats.classes.documented, oStats.classes.undocumented, oStats.classes.total, (iPercent = oStats.classes.percent) ? chalk[iPercent > 100 ? "yellow" : "green"]("" + iPercent + "%") : "-"]);
      oTable.push([chalk.cyan("mixins"), oStats.mixins.documented, oStats.mixins.undocumented, oStats.mixins.total, (iPercent = oStats.mixins.percent) ? chalk[iPercent > 100 ? "yellow" : "green"]("" + iPercent + "%") : "-"]);
      oTable.push([chalk.cyan("methods"), oStats.methods.documented, oStats.methods.undocumented, oStats.methods.total, (iPercent = oStats.methods.percent) ? chalk[iPercent > 100 ? "yellow" : "green"]("" + iPercent + "%") : "-"]);
      oTable.push([]);
      oTable.push(["", chalk.cyan("Files"), chalk.cyan("Extras"), chalk.cyan("Objects"), chalk.cyan("Coverage")]);
      oTable.push([chalk.underline.cyan(this.nameArgs), oStats.files, oStats.extras, oStats.all.total, chalk.bold[(iPercent = oStats.all.percent) > 100 ? "yellow" : "green"]("" + iPercent + "%")]);
      grunt.log.writeln();
      grunt.log.writeln(oTable.toString());
      grunt.log.writeln();
    }
    if (oOptions.undocumented && (oStats != null ? oStats : oStats = oCodo.getStats()).all.undocumented) {
      grunt.log.writeln();
      grunt.log.writeln(chalk.yellow.underline("Undocumented objects"));
      grunt.log.writeln();
      _ref1 = oStats.undocumented;
      _results = [];
      for (sSection in _ref1) {
        oData = _ref1[sSection];
        if (!oData.length) {
          continue;
        }
        oTable = new CLITable({
          head: [chalk.cyan(sSection), chalk.cyan("Path")]
        });
        for (_i = 0, _len = oData.length; _i < _len; _i++) {
          oEntry = oData[_i];
          oTable.push([chalk.cyan(oEntry[0]), path.relative(process.cwd(), oEntry[1])]);
        }
        grunt.log.writeln(oTable.toString());
        _results.push(grunt.log.writeln());
      }
      return _results;
    }
  });
};
