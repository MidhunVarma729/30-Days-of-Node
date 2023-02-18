const console = require("console")
const fs = require('fs')

const stdout = fs.createWriteStream('output.txt')
const stderr = fs.createWriteStream('errors.txt')

const printf = new console.Console(stdout, stderr);
printf.time();
var x = 10;
var y = 200;
var result = y/x;
if(result == 2){
    printf.log("Result : %d", result)
}else{
    printf.log("Result : " + result);
    printf.warn('Warning: Decimal number');
}

printf.timeEnd();