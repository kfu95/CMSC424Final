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


   var response = {
      venue:req.query.venue,
      startdate:req.query.startdate,
      enddate:req.query.enddate
   };
   console.log(req.query);
   console.log(res);
   console.log(response);
   res.end(JSON.stringify(response));
   
   
})

var server = app.listen(process.env.PORT, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})