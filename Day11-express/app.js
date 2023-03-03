var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('<h1>Express Server</h1>');
})

app.get('/break', (req, res)=>{
    res.send('💔')
})

app.get('/blast', (req, res)=>{
    res.send('💥')
})

app.listen(3000, ()=>{
    console.log('Server is listening on the port 3000.');
})
