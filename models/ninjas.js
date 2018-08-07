const mongoose = require('mongoose');
const Schema = mongoose.Schema;


  
 //create geolocation Schema
 const GeoSchema = new Schema({
    
    type :{
       type:String,
       default:"Point"
    },
    coordinates:{
       type:[Number],
       index:"2dsphere"
    }
    
 });


//create ninja schema & model

const ninjaSchema = new Schema({
   
   name :{
       type:String,
       require: [true,'Name field is required']
   },
   
   rank:{
        type:String
   },
   available:{
       type:Boolean,
       defualt:false
   },
   //add in geo location
   geometry:GeoSchema
   
   
   
});

const Ninja = mongoose.model('ninja',ninjaSchema);

module.exports = Ninja;