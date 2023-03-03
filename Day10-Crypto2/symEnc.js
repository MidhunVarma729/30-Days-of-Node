const crypto = require('crypto');

var algo = 'aes-256-ctr';

var iv = crypto.randomBytes(16).toString('hex').slice(0,16);
var password = crypto.randomBytes(32).toString('hex').slice(0,32);


function encrypt(text){
    var cipher = crypto.createCipheriv(algo, password, iv);
    // Iv is the initialization vector. In most of the cases it can be half size of the key.
    var crypted_text = cipher.update(text, 'utf8', 'hex');
    // Input and Output encodings.
    crypted_text += cipher.final('hex');
    // Cipher final is used to end the cipher method above to avoid further using.
    return crypted_text;
}

function decrypt(text){
    var decipher = crypto.createDecipheriv(algo, password, iv);
    var decrypted_text = decipher.update(text, 'hex', 'utf8');
    decrypted_text += decipher.final('utf8');
    return decrypted_text;
}

var text = 'An unemployed man learns that his ex-girlfriend was murdered. He suddenly finds himself travelling through time to his middle school years and has chance to change the future and save the girl.';

var e = encrypt(text);
console.log(e);

var d = decrypt(e);
console.log(d);