###
 * grunt-codo-codo
 * https://github.com/Leny/grunt-codo-codo
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
###

"use strict"

path = require "path"
lodash = require "lodash"

module.exports = ( grunt ) ->

    grunt.registerMultiTask "codo", "Generate codo documentation.", ->
        oOptions = @options()

        aFolderSources = []

        @filesSrc
            .filter ( sFilePath ) ->
                grunt.file.exists sFilePath
            .forEach ( sFilePath ) ->
                # As codo seems to expect folders path instead of files, we will use dirname of given files, and store them into aFolderSources
                return aFolderSources.push sFilePath if grunt.file.isDir sFilePath
                return aFolderSources.push path.dirname sFilePath if grunt.file.isFile sFilePath

        aFolderSources = lodash.uniq aFolderSources

        console.log aFolderSources

        grunt.log.writeln "Please, now, do something."
