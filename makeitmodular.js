const filter = require('./modules/filter')
      name = process.argv[2],
      ext = process.argv[3]; 

filter(name, ext, (err, data)=> {
    if (err) { return console.log(err); }
    data.forEach(item => console.log(item));
})