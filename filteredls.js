const fs = require('fs'),
      path = require('path'),
      dir = process.argv[2],
      ext = process.argv[3]; 

if (dir && ext) {
    fs.readdir(dir, (err, list)=>{
        for (var index = 0; index < list.length; index++) {
            if (path.extname(list[index])=="."+ext) {
                console.log(list[index]);
            }
        }
    })
} else {
    console.warn("not enough args");
}