const fs = require('fs');
try{
    fs.readFile('mg.txt', (err, data)=>{
        if(err){
            throw err;
        }
        console.log(data);
    });
}
catch(err){
    console.error(err);
}