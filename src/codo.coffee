###
 * grunt-codo-codo
 * https://github.com/Leny/grunt-codo-codo
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
###

"use strict"

module.exports = ( grunt ) ->

    grunt.registerMultiTask "codo", "Generate codo documentation.", ->
        oOptions = @options()

        @filesSrc
            # .filter ( sFilePath ) ->
                # grunt.file.exists( sFilePath ) and grunt.file.isFile( sFilePath )
            .forEach ( sFilePath ) ->
                grunt.log.writeln "Please, now, do something."

