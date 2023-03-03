const {Buffer} = require('node:buffer');

var crypto = require('crypto');
var fs = require('fs');

pubK = fs.readFileSync('pub.key').toString();

var buf = Buffer.from('This is secret code', 'utf8');

// The buffers module provides a way of handling streams of binary data.

secretData = crypto.publicEncrypt(pubK, buf);

privK = {
    key: fs.readFileSync('priv.key').toString('utf8'),
    passphrase: 'nodejsera',
}
// The purpose of the passphrase is usually to encrypt the private key.

plainText = crypto.privateDecrypt(privK, secretData);

console.log(plainText.toString())