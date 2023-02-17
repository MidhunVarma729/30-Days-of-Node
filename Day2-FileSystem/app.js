var fs = require('node:fs')
// fs.readFile('message.txt', (err, data)=>{ 
//     if(err)
//         throw err;
//     console.log("Content: "+ data);
// })




// var filename = "message.txt";
// var text = "\nsed bhai sed";
// var data = fs.appendFileSync(filename, text);
// console.log("Text written in message file.")
// console.log(data)

// fs.appendFile(filename, text, (err)=>{
//     if(err)
//     throw err;
//     console.log('text is saved');
// })

// fs.rename('message.txt', 'new-message.txt', (err)=>{
//     if(err)
//     throw err;
//     console.log('rename successful!');
// })

// console.log("This method is Asynchronous");


fs.renameSync('newData.txt', 'message.txt')
console.log('File is renamed Successfully!')

console.log("This method is Asynchronous");

var fs =  require('fs');
fs.renameSync('data.txt', 'newData.txt');
console.log('File renamed successfully');

console.log("This method is Synchronous");