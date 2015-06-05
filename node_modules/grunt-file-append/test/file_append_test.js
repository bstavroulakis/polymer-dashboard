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

exports.file_append = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  test1: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/testing1');
    var expected = grunt.file.read('test/expected/testing1');
    test.equal(actual, expected, 'Test one fail');

    test.done();
  },
  test2: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/testing2');
    var expected = grunt.file.read('test/expected/testing2');
    test.equal(actual, expected, 'Test two fail');

    test.done();
  },
  test3: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/testing3');
    var expected = grunt.file.read('test/expected/testing3');
    test.equal(actual, expected, 'Test three fail');

    test.done();
  },
  test4: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/testing4');
    var expected = grunt.file.read('test/expected/testing4');
    test.equal(actual, expected, 'Test four fail');

    test.done();
  }
};
