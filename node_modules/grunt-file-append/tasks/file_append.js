/*
 * grunt-file-append
 * http://dj7.dyndns.org
 *
 * Copyright (c) 2013 Efim Vl. Dejin
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('file_append', 'Append or prepend data to file.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
//    var options = this.options({
//      punctuation: '.',
//      separator: ', '
//    });

    var data = this.data.files;

    var r, record;
    for (var key = 0; r = data[key]; key++) {
      if (typeof r === 'function') {
        record = r();
      } else {
        record = r;
      }

      var inputFile;
      if (typeof record.input === 'function') {
        inputFile = record.input();
      } else {
        inputFile = record.input ? record.input : '';
      }

      if (!grunt.file.exists(inputFile)) {
        grunt.log.warn('Source file "' + inputFile + '" not found.');
        return false;
      }

      var outputFile;
      if (typeof record.output === 'function') {
        outputFile = record.output();
      } else {
        outputFile = record.output ? record.output : inputFile;
      }

      var prepend;
      if (typeof record.prepend === 'function') {
        prepend = record.prepend();
      } else {
        prepend = record.prepend ? record.prepend : '';
      }

      var append;
      if (typeof record.append === 'function') {
        append = record.append();
      } else {
        append = record.append ? record.append : '';
      }

      var value = prepend + grunt.file.read(inputFile) + append;

      grunt.file.write(outputFile, value);

    }

  });

};
