var crypto = require('crypto');

var hash = crypto.createHash('ripemd160');

data = hash.update('Midhun', 'utf-8');

console.log(data);

hex_hash = data.digest('hex');

console.log(hex_hash)

