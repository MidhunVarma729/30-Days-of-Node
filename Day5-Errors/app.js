const err = new Error('This is the error message!');
err.code = 'A monkey just said "hello"!';
console.log(err.message)
console.log("This is the error code:" + err.code)
console.log("This is the error stackTraceLimit:" + Error.stackTraceLimit)
console.log("This is the error stack:" + err.stack)

Error.stackTraceLimit = 2;

var newObj = {}
var newErr = Error.captureStackTrace(newObj);
console.log(newObj.stack);

console.log(Error.stackTraceLimit)
