const { on } = require("events");
var express = require("express");
var app =express();
const bodyParser = require('body-parser');
const https = require("http");
app.use(bodyParser.urlencoded({extended:true}));
var send;



app.get("/",(req,res)=>{
    https.get("http://localhost:3060/data",(response)=>{
        console.log(response.statusCode);
        response.on("data",(d)=>{
            var final_data = d;
            res.send("<h1>"+final_data+"</h1>")
            console.log(final_data);
        })
    });
   
    // res.send("run");
})





app.listen(4000,(req,res)=>{
    console.log("server is running at 3060 port");
})

