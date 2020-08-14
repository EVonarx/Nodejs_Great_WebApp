var express = require('express'); // module for web application
var ejs = require('ejs'); // module for template engine
var bodyParser = require('body-parser'); // module to parse the html response and transform the HTML inputs into a javascript object


var app = express();

app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/img'));
app.use(bodyParser.urlencoded());

app.get('/', function (req, res) {
    res.render('index.ejs');
});

app.get('/help', function (req, res) {
    res.render('help.ejs');
});


app.listen(process.env.PORT || 3000, function() {
    console.log('Great WebApp started (by default on port 3000)');
});