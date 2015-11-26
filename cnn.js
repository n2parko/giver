var Nightmare = require('nightmare');
var vo = require('vo');

var link;
vo(run)(function(err, result) {
  if (err) throw err;
});

function *run() {
  var nightmare = Nightmare();
  link = yield nightmare
    .goto('http://cnn.com')
    .evaluate(function() {
      return document.title;
    });
  console.log(title);
  yield nightmare.end();
}

console.log(link);