'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var express = _interopDefault(require('express'));
var compression = _interopDefault(require('compression'));

var cacheControl = function () { return function (req, res, next) {
  res.header('Cache-Control', 'public, max-age=31536000, no-cache'); // lucid
  // res.header('Cache-Control', 'no-cache, no-store, must-revalidate') // never
  next();
}; };

var app = express();
app.use(compression());
app.use('/public', express.static('build/public', { maxAge: '365d' }));
app.use(cacheControl());

var server = app.listen(process.env.PORT || 3000, function () {
  console.log(("[server] app on http://localhost:" + (server.address().port) + " - " + (app.settings.env)));
});

process.on('SIGTERM', function () {
  server.close(function () {
    process.exit(0);
  });
});
//# sourceMappingURL=server.js.map
