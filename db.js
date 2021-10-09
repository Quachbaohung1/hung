const mongoose = require("mongoose");

var mongoURL ='mongodb+srv://Baohung:Bungmobanhbao0303@cluster0.mqzld.mongodb.net/test'

mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected' , () =>{
    console.log('Mongo DB Connection Successful');
})

db.on('error' , () =>{
    console.log('Mongo DB Connection Failed');
})
module.exports = mongoose