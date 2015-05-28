'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.vulcanize = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/default/vulcanized.html');
    var expected = grunt.file.read('test/expected/default/vulcanized.html');
    test.equal(actual, expected);

    test.done();
  },
  csp: function(test) {
    test.expect(2);

    var actual_html = grunt.file.read('tmp/csp/vulcanized.html');
    var actual_js = grunt.file.read('tmp/csp/vulcanized.js');
    var expected_html = grunt.file.read('test/expected/csp/vulcanized.html');
    var expected_js = grunt.file.read('test/expected/csp/vulcanized.js');
    test.equal(actual_html, expected_html);
    test.equal(actual_js, expected_js);

    test.done();
  },
  inline: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/inline/vulcanized.html');
    var expected = grunt.file.read('test/expected/inline/vulcanized.html');
    test.equal(actual, expected);

    test.done();
  },
  excludes: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/excludes/vulcanized.html');
    var expected = grunt.file.read('test/expected/excludes/vulcanized.html');
    test.equal(actual, expected);

    test.done();
  },
  strip: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/strip/vulcanized.html');
    var expected = grunt.file.read('test/expected/strip/vulcanized.html');
    test.equal(actual, expected);

    test.done();
  },
  multiple: function(test) {
    test.expect(2);

    var actual = grunt.file.read('tmp/multiple/one.html');
    var expected = grunt.file.read('test/expected/multiple/one.html');
    test.equal(actual, expected);

    var actual2 = grunt.file.read('tmp/multiple/two.html');
    var expected2 = grunt.file.read('test/expected/multiple/two.html');
    test.equal(actual2, expected2);

    test.done();
  },
  abspath: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/abspath/vulcanized.html');
    var expected = grunt.file.read('test/expected/abspath/vulcanized.html');

    test.equal(actual, expected);

    test.done();
  },
  'no-strip-excludes': function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/no-strip-excludes/vulcanized.html');
    var expected = grunt.file.read('test/expected/no-strip-excludes/vulcanized.html');

    test.equal(actual, expected);

    test.done();
  }
};
