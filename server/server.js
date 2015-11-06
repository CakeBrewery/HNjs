var express = require('express'); 
var app = express(); 
var bodyParser = require('body-parser'); 

var mysql = require('mysql'); 
var connection = mysql.createConnection({
    port: 3307,
    host: 'localhost', 
    user: 'hnjs', 
    password: '', 
    database: 'hnjs'
});

connection.connect(function(err){
    if(!err){
        console.log("Connected to MySQL..."); 
    } else {
        console.log("Error connectingn to database ... \n\n"); 
    }
});

app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json()); 

var port = process.env.PORT || 8080; 
var router = express.Router(); 

router.get('/links', function(req, res){
    connection.query('SELECT * FROM links;', function(err, rows, fields){
        if(!err){
            linksModel = []; 
            rows.forEach(function(link){
                linksModel.push(link); 
            });

            res.json(linksModel); 
        }
        else
            console.log("Error querying for links"); 
    });
});

app.all('/api/links', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next(); 
});

app.use('/api', router);

app.listen(port); 
console.log('Listening on port' + port); 
