var fs = require('fs');

const {Console} = require('console');

const output = fs.createWriteStream('./stdout.log');

const errOutput = fs.createWriteStream('./stderr.log');

const printf = new Console(output, errOutput);

const mis = 112015188;

printf.log('MIS number: %d', mis);

printf.log('This will be stored in a file.')

// console.clear()
