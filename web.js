var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {

//Modified Code for Assignment
fs.readFile('index.html', function (err, data) {
  if (err) throw err;
  //console.log(data);
  //console.log(data.toString("utf-8"));
  
  myData = data.toString("utf-8");
  response.send(myData);
});



 // response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
