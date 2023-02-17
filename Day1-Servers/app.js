var http = require('node:http')
var fs = require('node:fs')

var host = "127.0.0.1"

var port = "3000"

var server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'audio/mp4'});
    fs.exists('video.mp4', function(exists){
        if(exists){
            var rstream = fs.createReadStream('video.mp4');
            rstream.pipe(res);
        }
        else
            res.end("Its a 404!");
        }
    ); 
    console.log("Hey there");
    }
)

server.listen(port, host, (error)=>{
    if(error){
        return console.log('Error Occured: ', error);
    }
    console.log('Server is listening on ' + host + ':' + port);
});

