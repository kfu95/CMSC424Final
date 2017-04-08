var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static(__dirname+'/styles.css'));
app.get('/Bitcamp.html', function (req, res) {
   res.sendFile( __dirname + "/" + "Bitcamp.html" );
})

app.get('/events', function (req, res) {
   // Prepare output in JSON format
   var response = {
      venue:req.query.venues,
      
   };
   console.log(response);
   res.end(JSON.stringify(response));
   
   
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})