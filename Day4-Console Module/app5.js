console.time('division');

var x = 10;

var y = 200;

var result = y/x;

if(result == 2){
    console.log("Result : %d", result)
}else{
    console.log("Result : " + result);
    console.warn('Warning: Decimal number');
}

console.timeEnd('division');