const http = require('http'); 

http.createServer((req, res)=>{
    if(req.method=="POST") {
        let body = [];
        req.on('data', function(chunk) {
            body.push(chunk);
        }).on('end', function() {
            body = body.join('').toUpperCase();
            res.write(body);
            res.end();
        }); 
    }
}).listen(Number(process.argv[2])); 