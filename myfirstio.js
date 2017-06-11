const fs = require('fs'),
      file = process.argv[2], 
      filecontent = fs.readFileSync(file).toString(), 
      newlinelength = filecontent.split("\n").length - 1;

console.log(newlinelength);