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
   var enddate = req.query.enddate

   var response = {
      venue:venue,
      startdate:startdate,
      enddate:enddate
   };
   console.log(req.query);
   console.log(res);
   console.log(response);
   
   var spawn = require("child_process").spawn;
   var process = spawn('python',["BACKEND.py", venue, startdate, enddate]);
   
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