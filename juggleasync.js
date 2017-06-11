const http = require('http'),
      urls = [process.argv[2], process.argv[3], process.argv[4]], 
      results = [];   

const getContent = (url) => {
    return new Promise( (resolve, reject) => {
        http.get(url, (response) => {
            const body = [];
            response.setEncoding("utf-8").on("data", (data) => { body.push(data) });
            response.on("end", ()=>{ resolve(body.join('')) });
        });
    }); 
}

const promises = urls.map( (item) => { return getContent(item); });

Promise.all(promises).then((values, i) => { 
  for (var index = 0; index < values.length; index++) {
      console.log(values[index]);
  }
});