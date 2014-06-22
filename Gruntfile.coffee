###
 * grunt-codo-codo
 * https://github.com/Leny/grunt-codo-codo
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
###

"use strict"

module.exports = ( grunt ) ->

    require( "matchdep" ).filterDev( "grunt-*" ).forEach grunt.loadNpmTasks

    grunt.initConfig
        coffeelint:
            options:
                arrow_spacing:
                    level: "error"
                camel_case_classes:
                    level: "error"
                duplicate_key:
                    level: "error"
                indentation:
                    level: "ignore"
                max_line_length:
                    level: "ignore"
                no_backticks:
                    level: "error"
                no_empty_param_list:
                    level: "error"
                no_stand_alone_at:
                    level: "error"
                no_tabs:
                    level: "error"
                no_throwing_strings:
                    level: "error"
                no_trailing_semicolons:
                    level: "error"
                no_unnecessary_fat_arrows:
                    level: "error"
                space_operators:
                    level: "error"
            tasks:
                files:
                    src: [ "src/*.coffee" ]
        coffee:
            options:
                bare: yes
            tasks:
                files:
                    "tasks/codo.js": "src/codo.coffee"
        clean:
            test: [ "test/expected", "doc" ]
        watch:
            tasks:
                files: "src/**/*.coffee"
                tasks: [
                    "coffeelint"
                    "coffee"
                ]
        codo:
            default:
                options: {}
                src: [
                    "test/fixtures/default"
                ]
            custom:
                options: {}
                src: [
                    "test/fixtures/default/**/*.coffee"
                    "test/fixtures/custom"
                ]

    grunt.loadTasks "tasks"

    grunt.registerTask "default", [
        "coffeelint"
        "coffee"
        "clean"
        "codo"
    ]

    grunt.registerTask "build", [
        "coffeelint"
        "coffee"
    ]

    grunt.registerTask "test", [
        "clean"
        "codo"
    ]
