const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine','pug')

app.get('/', function(request, response, next){
    response.sendFile('index2.html',{root: __dirname});
});

app.post('/', function(request, response, next){
	response.send(request.body);
});


app.listen(port);