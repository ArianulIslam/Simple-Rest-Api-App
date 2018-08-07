const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
   }
   //add in geo location
   
   
});

const Ninja = mongoose.model('ninja',ninjaSchema);

module.exports = Ninja;