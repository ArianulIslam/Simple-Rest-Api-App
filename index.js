const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose =require('mongoose'); 
//var userController = require('./controllers/userController');
 
mongoose.connect("mongodb://" + process.env.IP + "/restapi");
mongoose.Promise = global.Promise;

//set app express app
const app = express();

app.use(bodyParser.json())

app.use('/api',routes); 


//listen for request
app.listen(process.env.PORT || 4000,function(){
    console.log('Server is running');
});

//fire controller 
//userController(app);


