const fs = require('fs'),
      path = require('path');

module.exports = (name, ext, cb) => {
    if (name && ext && cb) {
        fs.readdir(name, (err, data)=>{

            if(err) { return cb(err); }

            let list = data.filter(item => (path.extname(item)=="."+ext));
            cb(null, list)               
        })
    } else {
        console.warn("not enough args");
    }
}