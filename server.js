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
   
   // RUN OUR PYTHON SCRIPT
   var spawn = require("child_process").spawn;
   // SCRIPT TO TURN A VENUE ID INTO EVENTS GIVEN START DATE AND END DATE
   var process = spawn('python',["BACKENDvenue2events.py", venue, startdate, enddate]);
   
   // OBJECT TO STORE DATA
   str = {data:""}
   
   // BUFFER MAY BE TOO SMALL, SO THIS INNER FUNCTION MAY BE CALLED MULTIPLE TIMES
    process.stdout.on('data', function (data){
        // WHEN DATA IS RECEIVED IN THE BUFFER, ADD IT TO THE STR OBJECT
        console.log(str.data.length)
        str.data += data.toString()
    });
   
   // WHEN OUR PYTHON SCRIPT FINISHES
    process.on('close', function(code) {
   
        // GET OUR JSON RESPONSE READY
       var response = {
          venue:venue,
          data:JSON.parse(str.data)
       };
       
       // RETURN OUR JSON RESPONSE
      res.end(JSON.stringify(response));
   
    });
    
   
   
})

app.get('/events', function (req, res) {
   
   // GET THE EVENT ID(S) TO GET ARTISTS FOR
   var artist = req.query.artist;
    var startdate = req.query.startdate;
   var enddate = req.query.enddate;
   
   console.log(req.query);
   
   console.log(artist);
   
   // PYTHON SCRIPT TO GET ARTISTS FROM EVENT IDS
   var spawn = require("child_process").spawn;
   var process = spawn('python',["BACKENDartists2events.py", artist,startdate,enddate]);
   
   str = {data:""}
   
   process.stdout.on('data', function (data){
       // GET THE DATA
        str.data += data.toString();
   });
   
   process.on('close', function(code) {
        // RENDER OUR EMBEDDED JAVASCRIPT WITH OUR JSON DATA
        response = JSON.parse(str.data);
        res.end(JSON.stringify(response));
    });
        
   
})

app.get('/artists', function (req, res) {
   
   // GET THE EVENT ID(S) TO GET ARTISTS FOR
   var event_ids = req.query.event_ids;

   
   console.log(req.query);
   
   console.log(event_ids);
   
   // PYTHON SCRIPT TO GET ARTISTS FROM EVENT IDS
   var spawn = require("child_process").spawn;
   var process = spawn('python',["BACKENDevents2artists.py", event_ids]);
   
   str = {data:""}
   
   process.stdout.on('data', function (data){
       // GET THE DATA
        str.data += data.toString();
   });
   
   process.on('close', function(code) {
        // RENDER OUR EMBEDDED JAVASCRIPT WITH OUR JSON DATA
       res.render('ConcertInfo', { artists: JSON.parse(str.data) });
   
    });
        
   
})

app.get('/playlist', function (req, res) {
   
   // GET THE EVENT ID(S) TO GET ARTISTS FOR
   var artist_ids = req.query.artists;

   console.log(req.query);
   
   console.log(artist_ids);
   
   // PYTHON SCRIPT TO GET ARTISTS FROM EVENT IDS
   var spawn = require("child_process").spawn;
   var process = spawn('python',["BACKENDartists2playlist.py", artist_ids]);
   
   // Store the to-be playlist URL
   str = {data:""}
   
   process.stdout.on('data', function (data){
       // GET THE DATA
        str.data += data.toString();
   });
   
   // When the playlist is created, redirect to the playlist link
   process.on('close', function(code) {
        // REDIRECT TO PLAYLIST
        console.log(str.data);
       res.redirect(str.data);
   
    });
        
   
})

var server = app.listen(process.env.PORT, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})