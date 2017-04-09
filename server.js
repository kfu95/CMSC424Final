var express = require('express');
var app = express();
var d = {}
var wait = require('wait.for');

// express, npm
app.use(express.static(__dirname));
app.use(express.static(__dirname+'/styles.css'));
app.get('/Bitcamp.html', function (req, res) {
   res.sendFile( __dirname + "/" + "Bitcamp.html" );
})

app.set('view engine', 'ejs');

app.get('/events', function (req, res) {
   // Prepare output in JSON format
   var venue = req.query.venue;
   var startdate = req.query.startdate;
   var enddate = req.query.enddate;
   
   var spawn = require("child_process").spawn;
   var process = spawn('python',["BACKENDvenue2events.py", venue, startdate, enddate]);
   
   str = {data:""}
   
    process.stdout.on('data', function (data){
        console.log(str.data.length)
        str.data += data.toString()
    });
   
    process.on('close', function(code) {
   
       var response = {
          venue:venue,
          data:JSON.parse(str.data)
       };
       
       
      res.end(JSON.stringify(response));
   
    });
    
   
   //res.end(JSON.stringify(response));
   
   
})

app.get('/artists', function (req, res) {
   // Prepare output in JSON format
   var event_ids = req.query.event_ids;

   
   console.log(req.query);
   
   console.log(event_ids);
   
   var spawn = require("child_process").spawn;
   var process = spawn('python',["BACKENDevents2artists.py", event_ids]);
   
   str = {data:""}
   
   process.stdout.on('data', function (data){
        console.log("Rendering");
        str.data += data.toString();
   });
   
   process.on('close', function(code) {
   
       res.render('ConcertInfo', { artists: JSON.parse(str.data) });
   
    });
        
   
   //res.end(JSON.stringify(response));
   
})

var server = app.listen(process.env.PORT, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})