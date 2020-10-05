'use strict'

// const config = require('../config')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path       = require('path')
const route      = require('../routes/index')
const config     = require('../config/index')

console.log(config)


const app = express()


// Middlewares

app.use(bodyParser.json())
app.use(cors())



// API routes

app.use('/api',route)

// app.use('/api', apiRouter)
// app.use(errorHandler.handleNotFound)
// app.use(errorHandler.handleError)


// Set Static Folder
app.use(express.static(path.join(__dirname, '../public')));
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});



// Listen to port

exports.start = () => {
  app.listen(config.port, (err) => {
    if (err) {
      console.log(`Error : ${err}`)
      process.exit(-1)
    }

    console.log(`${config.app} is running on ${config.port}`)
  })
}

exports.app = app
