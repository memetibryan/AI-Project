var express = require('express');
var app = express();


app.get('/',function(req, res) {
    res.sendFile(__dirname + './index/index.html');
    res.send()
});
app.listen(8000)