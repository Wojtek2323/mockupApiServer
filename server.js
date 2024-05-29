// Requiring express in our server 
var fs = require('fs');
const path = require('path');
const express = require('express'); 
const app = express(); 
var cors = require('cors')
//const jsonUrl = "C:/Users/w.szymanski/Documents/FlightCatcher/mockupApiServer"


const allowedOrigins = ['http://*'];
app.use(cors({
  origin: function(origin, callback){
    if (!origin) {
      return callback(null, true);
    }

    if (allowedOrigins.includes(origin)) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }

}));

//var usersFilePath = path.join(jsonUrl, 'data.json');
var usersFilePath = 'data.json'
app.get('/', function(req, res){
    res.set('Content-Type','application/json');
    var readable = fs.createReadStream(usersFilePath);
    readable.pipe(res);
});
  
// Defining get request at '/' route 
// app.get('/', function(req, res) { 
//     res.type('json');
//   res.json(jsonUrl); 
// }); 

// Setting the server to listen at port 3000 
app.listen(3000, function(req, res) { 
    
    console.log("Server is running at port 3000"); 
  }); 