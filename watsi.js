var Nightmare = require('nightmare');
var vo = require('vo');

var url = 'https://watsi.org/gift-cards';

// variables
var amount = 5;
var recipient_name = 'Kevin Niparko';
var recipient_email = 'kevin@segment.com';
var note = 'Thanks for your help!';
var full_name = 'Kevin Niparko'
var email_address = 'kevin@segment.com';
var password = 'testingtesting1';
var cc_num = 124567890;
var mmyy = '11/19';
var cvv = 102;

 
vo(run)(function(err, result) {
  if (err) throw err;
});

function *run() {
  var nightmare = Nightmare({ show: true });
  yield nightmare
    .goto(url)
    .type('input[name="donation_amount"]', amount)
    .wait(1000)
    .click('.donate_button')
    .wait(1000)
    .type('input[name="recipient_name"]', recipient_name)
    .type('input[name="recipient_email"]', recipient_email)
    .type('input[name="notes"]', note)
    .type('input[name="name"]', full_name)
    .type('input[name="email"]', email_address)
    .type('input[name="password"]', password)
    .type('input[name="cc_num"]', cc_num)
    .type('input[name="cc_exp"]', mmyy)
    .type('input[name="cc_cvv"]', cvv)
    .wait(10000)
  yield nightmare.end();
}