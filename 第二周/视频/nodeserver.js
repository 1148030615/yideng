var http = require('http');
http.createServer(function(req,res){
    console.log(req);
    res.writeHeader(200,{'Content-Type':'text/plan'});
    res.end("哈哈哈哈哈")
}).listen(3000);
console.log("服务器运行在:3000")