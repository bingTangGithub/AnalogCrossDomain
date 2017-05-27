
//to create http server
var express = require('express');
//create app(http server)
var app=express();

app.use(express.static("./"));

//set port of the server
app.set("port", 3002);

app.listen(app.get('port'),function(){
    console.log('http Server:http//localhost:'+app.get('port')+'/');
})
