const http = require('http'), 
      url = process.argv[2];

http.get(url, (resp) => {
        let chars = 0, string = ""; 
        resp.setEncoding("utf-8").on("data", (data) => { chars+=data.length; string+=data });
        resp.on("end", ()=>{ console.log(chars); console.log(string); });
    } 
);