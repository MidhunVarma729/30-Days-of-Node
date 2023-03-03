var crypto = require('crypto');
var fs = require('fs');
const {Buffer} = require('node:buffer');

privK = {
    key: fs.readFileSync('priv.key').toString(),
    passphrase: 'nodejsera ',
}

console.log(privK)

var buf = Buffer.from('KenshiYonezu', 'utf8');

secretData = crypto.privateEncrypt(privK, buf);

pubk = fs.readFileSync('pub.key').toString();

plainText = crypto.publicDecrypt(pubk, secretData);

console.log(plainText);