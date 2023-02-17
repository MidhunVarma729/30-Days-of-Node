var fs = require('node:fs')
// var pattern = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim;
// var str = fs.readFileSync('data.txt').toString();
// console.log(str)
// var myArray = str.matchAll(pattern)
// console.log(myArray.length);
// console.log(myArray)


// var filename = 'data.html';
// var str = fs.readFileSync(filename).toString();
// var pattern = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim;
// var myarray = str.match( pattern );
// var len = myarray.length;
// console.log("Occurrences of pattern in the string is : " + len);
// console.log(myarray)


// var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
// var str = "midhun5varma2@gmail."
// var result = str.match(pattern);
// if(result)
//     console.log('The email address is perfectly valid!');
// else
//     console.log('The email address is invalid!');


// var str = 'FFF'
// var pattern = /^[a-fA-F0-9]+$/g;
// var res = str.match( pattern );
// if(res){
// 	console.log("It is a Valid Hexadecimal number");
// }else{
// 	console.log("Not a valid Hexadecimal number");
// }
	

var str = 'Aa#1aaabcde'
var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;;

var res = str.match( pattern );
if(res){
	console.log("It is a valid password");
}else{
	console.log("Not a valid password");
}