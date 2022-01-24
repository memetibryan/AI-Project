const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3007;

app.use(express.static(__dirname + '../images'));
app.use(express.static(__dirname + '../js'));

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../index/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);