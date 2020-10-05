const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

     name:{
         type:String,
         required:true
     },
     email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    created_data:{
        type:Date,
        default:Date.now,
    }

})


module.exports  = mongoose.model('user',userSchema)