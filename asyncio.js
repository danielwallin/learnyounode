const fs = require('fs'),
      file = process.argv[2], 
      filecontent = fs.readFile(file, (err, data) => {
            const length = data.toString().split("\n").length -1;
            console.log(length);
      }); 