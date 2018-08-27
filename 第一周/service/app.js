var express = require("express");

var app = express();
app.get("/test",function(req,res){
    "use strict";
    res.send({
        data:"hellow"
    })
});

var server =  app.listen(3000,function(){
    "use strict";
    console.log("服务器启动3000")
});

module.exports   = app;
