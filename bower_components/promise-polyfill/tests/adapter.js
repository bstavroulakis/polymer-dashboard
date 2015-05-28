var Promise = require('../Promise')(function (fn) {
  return setTimeout(fn, 0);
});
var DefaultGlobalPromise;

module.exports = {
	resolved: Promise.resolve,
	rejected: Promise.rejected,
	deferred: function() {
		var obj = {};
		var prom = new Promise(function(resolve, reject) {
			obj.resolve = resolve;
			obj.reject = reject;
		});
		obj.promise = prom;
		return obj;
	},
  defineGlobalPromise: function(globalScope) {
    DefaultGlobalPromise = globalScope.Promise;
    globalScope.Promise = Promise;
    globalScope.assert = require('assert');
  },
  removeGlobalPromise: function(globalScope) {
    globalScope.Promise = DefaultGlobalPromise;
  }
};
