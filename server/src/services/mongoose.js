const config = require('../config/index')
const mongoose = require('mongoose')

// Mongoose  connect 


exports.connect = () =>
{
    mongoose.connect(config.mongoURL.dev,{ useNewUrlParser: true ,useUnifiedTopology: true},()=>{
        console.log('Connected')
    })

}