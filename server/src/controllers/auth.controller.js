const User = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt  = require('jsonwebtoken')
const config  = require('../config/index')

const validations = require('../services/validations/user-schema.validation')

exports.register = async (req,res)=>{ // async states that the function will return a promise
    // Validate user input 
    const { error } = validations.userValidations('registerUser',req.body) // syntax to capture object directly 

    if(error)
    return res.status(400).send({ status:'error',data:error.details[0].message})

    
    // Check of user already exist

    let userExist  = await User.findOne({ email:req.body.email }) // await waits for the promise to complete before executing the other promises
    if(userExist) 
    return res.status(400).send({ status:'error',data:'Email already taken'});


    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password,salt)
    const user = new User(
        {
            name:req.body.name,
            email:req.body.email,
            password:hashedPassword,
            role:req.body.role
        }
    )

    try{
        const savedUser = await user.save();
        res.send({ status:'success',data : savedUser})
    }
    catch(error)
    {
        res.status(400).send({ status:'error',data:error})
    }

}


exports.login  = async (req,res)=>{

    // Verify Username and Password
    const { error } = validations.userValidations('login',req.body)
    if(error)
    return res.status(400).send({ status:'error',data:error.details[0].message})

        
    // Check if user exist

    let userExist  = await User.findOne({ email:req.body.email }) 
    if(!userExist) 
    return res.status(400).send({ status:'error',data:'Email is invalid'});

    // Password Check
    let passwordCheck =await bcrypt.compare(req.body.password,userExist.password)

    if(!passwordCheck)
    return res.status(400).send({ status:'error',data:'Password is invalid'});

    const token = await jwt.sign({_id:userExist._id},config.secret)


    res.header('auth-token',token).send({ status:'success',token:token,data:userExist })



}
