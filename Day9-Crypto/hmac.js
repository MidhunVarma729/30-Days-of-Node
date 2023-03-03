var crypto = require('crypto');

var gen_hmac = crypto.createHmac('whirlpool', 'Sample-key').update('message').digest('hex');

console.log(gen_hmac);