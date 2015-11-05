var express = require('express'); 
var app = express(); 
var bodyParser = require('body-parser'); 

//MySQL database configuration
//--empty--



app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json()); 


var port = process.env.PORT || 8080; 

var router = express.Router(); 


router.get('/links', function(req, res){
    var linksModel = []; 

    var link1 = {
        name: 'Announcing Yet Another Hacker News Clone', 
        link: '/' 
    };

    var link2 = {
        name: 'Is this site going to be the next big thing?',
        link: '/'
    };

    var link3 = {
        name: 'Yet Another Pointless Article', 
        link: '/'
    };

    linksModel.push(link1); 
    linksModel.push(link2); 
    linksModel.push(link3); 

    res.json(linksModel); 
});

app.all('/api/links', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next(); 
});

app.use('/api', router);

app.listen(port); 
console.log('Listening on port' + port); 
