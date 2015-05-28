/*
 * grunt-vulcanize
 * https://github.com/Polymer/grunt-vulcanize
 *
 * Copyright (c) 2013 The Polymer Authors
 * Licensed under the BSD license.
 */

'use strict';

var path = require('path');
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // set up tmp folders
    mkdir: {
      all: {
        options: {
          create: ['tmp/default', 'tmp/csp', 'tmp/inline', 'tmp/excludes', 'tmp/strip', 'tmp/multiple', 'tmp/abspath', 'tmp/no-strip-excludes']
        }
      }
    },

    // Configuration to be run (and then tested).
    vulcanize: {
      default: {
        options: {
        },
        files: {
          'tmp/default/vulcanized.html': ['test/fixtures/index.html'],
        },
      },
      abspath: {
        options: {
          abspath: path.resolve('test/fixtures/')
        },
        files: {
          'tmp/abspath/vulcanized.html': ['test/fixtures/index.html']
        }
      },
      csp: {
        options: {
          csp: true
        },
        files: {
          'tmp/csp/vulcanized.html': ['test/fixtures/index.html'],
        },
      },
      inline: {
        options: {
          inline: true
        },
        files: {
          'tmp/inline/vulcanized.html': ['test/fixtures/index.html'],
        }
      },
      excludes: {
        options: {
          excludes: {
            imports: ['polymer.html']
          }
        },
        files: {
          'tmp/excludes/vulcanized.html': ['test/fixtures/index.html']
        }
      },
      strip: {
        options: {
          strip: true
        },
        files: {
          'tmp/strip/vulcanized.html': ['test/fixtures/index.html']
        }
      },
      multiple: {
        files: {
          'tmp/multiple/one.html': ['test/fixtures/index.html'],
          'tmp/multiple/two.html': ['test/fixtures/index.html']
        }
      },
      'no-strip-excludes': {
        options: {
          'strip-excludes': false,
          excludes: {
            imports: ['polymer.html']
          }
        },
        files: {
          'tmp/no-strip-excludes/vulcanized.html': ['test/fixtures/index.html']
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'mkdir', 'vulcanize', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
