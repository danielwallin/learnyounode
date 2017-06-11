const http = require("http"), 
      baseurl = '/api/',
      url = require("url");


const getTime = (time) => {
    return {
        hour: time.getHours(), 
        minute: time.getMinutes(), 
        second: time.getSeconds()
    }    
}

const unixtime = (time) =>  {
    return { unixtime: time.getTime() }
}

http.createServer((req, res) => {

    let query = url.parse(req.url, true).query,
        time = new Date(query.iso);

    if (req.url.includes(baseurl + "parsetime")) {
        res.writeHead(200, { 'Content-Type': 'application/json' }); 
        res.end(JSON.stringify(getTime(time)));
        return; 
    }

    if (req.url.includes(baseurl + "unixtime")) {
        res.writeHead(200, { 'Content-Type': 'application/json' }); 
        res.end(JSON.stringify(unixtime(time)));
        return; 
    }

}).listen(Number(process.argv[2]));

