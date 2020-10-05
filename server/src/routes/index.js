const express = require('express')

const router = express.Router();

const tokenValidation = require('../services/validations/token-validation.service')

const authController = require('../controllers/auth.controller')

router.post('/register',authController.register)
router.post('/login',authController.login)

router.get('/testjwt',tokenValidation.auth,(req,res)=>{

    res.send('secured route')
})

module.exports =  router;