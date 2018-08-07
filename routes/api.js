const express = require('express');
const routes = express.Router();
const Ninja = require('../models/ninjas')


//get a list od ninjas from db
routes.get('/ninjas',function(req,res){
    
    res.send({type:'GET'});
    
})

// add new ninja to list
routes.post('/ninjas',function(req,res){
    //console.log(req.body);
    //var ninja = new Ninja(req.body);
   // ninja.save();
   Ninja.create(req.body).then(function(ninja){
         res.send(ninja);
 
   });
    // res.send({
    //     type:'POST',
    //     name: req.body.name,
    //     rank:req.body.rank
        
    // });
    
})

//update list in the db
routes.put('/ninjas/:id',function(req,res){
    
    Ninja.findByIdAndUpdate({_id:req.params.id}).then(function(ninja){
        
        res.send(ninja);
        
    });
    
    //res.send({type:'PUT'});
    
})

//delete ninja from dB
routes.delete('/ninjas/:id',function(req,res){
    Ninja.findByIdAndRemove({_id:req.params.id}).then(function(ninja){
        
        res.send(ninja);
        
    });
    //res.send({type:'DELETE'});
    
})

module.exports = routes;