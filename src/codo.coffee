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
        oOptions = @options
            extension: "coffee"
            output: @data.dest ? "./doc"
            theme: "default"
            name: "Codo"
            title: "Documentation"
            readme: "README.md"
            quiet: no
            verbose: no
            undocumented: no
            closure: no
            private: no
            analytics: no
            extra: []

        aFolderSources = []

        @filesSrc
            .filter ( sFilePath ) ->
                grunt.file.exists sFilePath
            .forEach ( sFilePath ) ->
                # As codo seems to expect folders path instead of files, we will use dirname of given files, and store them into aFolderSources
                return aFolderSources.push sFilePath if grunt.file.isDir sFilePath
                return aFolderSources.push path.dirname sFilePath if grunt.file.isFile sFilePath

        aFolderSources = lodash.uniq aFolderSources

        console.log oOptions

        grunt.log.writeln "Please, now, do something."
