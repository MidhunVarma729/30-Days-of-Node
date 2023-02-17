var fs = require('fs');

const {Console} = require('console');

const output = fs.createWriteStream('./stdout.log');

const errOutput = fs.createWriteStream('./stderr.log');

const print = new Console(output, errOutput);

const mis = 112015168;

print.log('MIS number: %d', mis);

print.log('This will be stored in a file.')

console.clear()