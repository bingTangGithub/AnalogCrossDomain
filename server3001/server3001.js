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
app.set("port", 3001);

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


var a = path.join(__dirname,'../a.json');
var b = path.join(__dirname,'../b.json');
var c = path.join(__dirname,'../c.json');
var d = path.join(__dirname,'../d.json');
var arr = [a,b,c,d];
var arrApi = ["a","b","c","d"];

arr.map((val,index) => {
    console.log(val.toString());
    app.get("/"+arrApi[index],function(req,res) {
        fs.readFile (val, function (err,data) {
            if (err) {
                process.exit(1)
            }
            res.json({
                data:JSON.parse(data)
            })
        })
    });
    console.log(index);
})


// app.post('/ajax/deal', function(req, res) {
//     console.log("server accept:", req.body.name);
//     var data = {
//         name: req.body.name + '-server 3000 process',
//         id: req.body.id + '-server 3000 process',
//     }

//     res.send(data);
//     res.end();

// })

app.listen(app.get('port'),function(){
    console.log('http Server:http//localhost:'+app.get('port')+'/');
})
