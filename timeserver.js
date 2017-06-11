const net = require('net'),
      server = net.createServer(function (socket) {

            const _createDate = () => {
                  let d = new Date(), 
                        month = d.getMonth()+1, 
                        date = d.getDate(), 
                        hours = d.getHours(), 
                        minutes = d.getMinutes();  

                  month = (month>9 ? '' : '0') + month; 
                  date = (date>9 ? '' : '0') + date; 
                  hours = (hours>9 ? '' : '0') + hours; 
                  minutes = (minutes>9 ? '' : '0') + minutes; 
                  
                  return d.getFullYear() + "-" +  month + "-" + date + " " + hours + ":" + minutes;
            }   

            socket.end(_createDate() + "\n"); 

      }); 

server.listen(process.argv[2]);