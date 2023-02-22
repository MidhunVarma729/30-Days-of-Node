// var connection;

var fs = require('fs');

// fs.readFile('msg.txt', (err, data)=>{
//     if(err)
//         return console.error(err);
//     // return used only to avoid the execution of next line
//     console.log('Content: '+ data)
// })


function callbackArg(error, data){
    if(error){
        return console.error("Error: ", error);
    }
    console.log(data);
}

console.time()
fs.readFile('msg.txt', callbackArg);
console.timeEnd()

console.time()
fs.readFile('mgs.txt', callbackArg);
console.timeEnd()

