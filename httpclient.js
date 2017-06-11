const http = require('http'), 
      url = process.argv[2];

http.get(url, resp => resp.setEncoding("utf-8").on("data", data => console.log(data)));