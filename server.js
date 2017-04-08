var express = require('express');
var app = express();
var d = {}


app.use(express.static('public'));
app.use(express.static(__dirname+'/styles.css'));
app.get('/Bitcamp.html', function (req, res) {
   res.sendFile( __dirname + "/" + "Bitcamp.html" );
})

app.get('/events', function (req, res) {
   // Prepare output in JSON format
   var venue = req.query.venue;
   var startdate = req.query.startdate;
   var enddate = req.query.enddate;
   
   var spawn = require("child_process").spawn;
   var process = spawn('python',["BACKENDvenue2events.py", venue, startdate, enddate]);
   
   process.stdout.on('data', function (data){
       
       var response = {
          venue:venue,
          data:data.toString()
       };
       
       console.log(req.query);
       console.log(res);
       console.log(response);
       
      res.end(JSON.stringify(response));
   });
   
   //res.end(JSON.stringify(response));
   
   
})

app.get('/artists', function (req, res) {
   // Prepare output in JSON format
   var event_ids = req.query.event_ids;

   
   console.log(req.query);
   console.log(res);
   
   var spawn = require("child_process").spawn;
   var process = spawn('python',["BACKENDevents2artists.py", event_ids]);
   
   process.stdout.on('data', function (data){
      res.end(data.toString());
   });
   
   //res.end(JSON.stringify(response));
   
   
})

var server = app.listen(process.env.PORT, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})