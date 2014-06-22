# grunt-codo-codo

![NPM version](http://img.shields.io/npm/v/grunt-codo-codo.svg) ![Dependency Status](https://david-dm.org/leny/grunt-codo-codo.svg) ![Downloads counter](http://img.shields.io/npm/dm/grunt-codo-codo.svg)

> Grunt task for generating codo documentation.

* * *

**Note:** I know, the plugin **grunt-codo** already exists. But it doesn't support multi-tasking (which I *need* for a project), and don't really fit with the usual practices for Grunt plugin.  
As I need a grunt task to generate *codo* documentation urgently, I prefer to recode my version of *grunt-codo*, renamed *grunt-codo-codo*. When the task will be ready, I'll push it on npm *and* should propose my work to the *grunt-codo* maintainers, to merge projects.  
As for now, I really need reactivity and solutions, so I made it myself.

* * *

## Getting Started

This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-codo-codo --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-codo-codo');
```

## The "codo" task

### Overview

In your project's Gruntfile, add a section named `codo` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  codo: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

_(Coming Soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

* Starting project (*22/06/14*)

### TODO

* [ ] Add basic unit tests

## License
Copyright (c) 2014 Leny  
Licensed under the MIT license.
