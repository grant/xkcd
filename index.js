var https = require('https');

var DOMAIN = 'https://xkcd.com/';
var PATH = 'info.0.json';

// Gets the current xkcd.
// @param id [String|Number] The id of the xkcd. Blank for current xkcd.
// @param cb [Function] The callback that passes (`err`, `data`)
// @example current(2, function(err, data){ console.log(data); });
function current (id, cb) {
  var idURL = id ? id + '/' : '';
  var url = DOMAIN + idURL + PATH;

  https.get(url, function(res) {
    var body = '';

    res.on('data', function(chunk) {
      body += chunk;
    });

    res.on('end', function() {
      var data = JSON.parse(body);
      cb(data, undefined);
    });
  }).on('error', function(err) {
    cb(undefined, err);
  });
}

// Gets the current xkcd. @see #current
// If one parameter is passed, it gets the current xkcd
// If two parameters are passed, [1]:id and [2]:callback
// @example xkcd(1, function(err, data){});
// @example xkcd(function(err, data){ console.log('latest'); });
var xkcd = function () {
  var id, cb;
  if (arguments.length == 2) {
    id = arguments[0];
    cb = arguments[1];
    current(id, cb);
  } else {
    cb = arguments[0];
    current(undefined, cb);
  }
};

module.exports = xkcd;
