const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// This file empties the Books collection and inserts the books below

const schema = new Schema({
  
    imagePath: {type:String, required:true}, 
    title: {type:String, required:true}, 
    publish: {type:String, required:true}, 
    info: {type:String, required:true}, 
     
  });

  module.exports = mongoose.model('Results', schema);