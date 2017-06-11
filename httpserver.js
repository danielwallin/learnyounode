const http = require('http'),
      fs = require('fs'), 
      file = process.argv[3];
      

http.createServer((req, res)=>{
    res.writeHead(200, { 'content-type': 'text/plain' });
    stream = fs.createReadStream(file);      
    stream.pipe(res);
}).listen(Number(process.argv[2]));  