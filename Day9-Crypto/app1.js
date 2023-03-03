var crypto = require('crypto');
var fs = require('fs');

// Reading the message data
var file_data = fs.createReadStream('message.txt')
// console.log(data)

var hash;

//Passing the data to hash function
file_data.on('data', (data)=>{
    hash = crypto.createHash('sha256').update(data);
})

file_data.on('end', ()=>{
    var gen_hash = hash.digest('hex');
    var filename = 'encrypted_message.txt';
    console.log('Hash generated using sha256:' + ' \nHashed output is :  ' + gen_hash + ' \nFile name is :  ' + filename);
    fs.writeFileSync(filename, gen_hash);
})