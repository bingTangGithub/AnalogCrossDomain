var fs=require('fs');
var path=require('path');

//to create http server
var express = require('express');
//create app(http server)
var app=express();

//to parse body data
var bodyParser=require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("./"));

//set port of the server
app.set("port", 3000);

app.all('*', function(req, res, next) {
    // res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});



app.post('/ajax/deal', function(req, res) {
    console.log("server accept:", req.body.name);
    var data = {
        name: req.body.name + '-server 3000 process',
        id: req.body.id + '-server 3000 process',
    }

    res.send(data);
    res.end();

})

app.listen(app.get('port'),function(){
    console.log('http Server:http//localhost:'+app.get('port')+'/');
})
