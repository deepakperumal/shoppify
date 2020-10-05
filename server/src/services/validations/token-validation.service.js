const jwt = require('jsonwebtoken')
const config  = require('../../config/index')

exports.auth = (req,res,next)=>{

    const token = req.header('auth-token')
    if(!token)
    return res.status(401).send({ status:'error',data:'Access Denied'})

    try{

        let verifiedToken = jwt.verify(token,config.secret)
        next()
    }
    catch(error)
    {
        return res.status(400).send({ status:'error',data:error })
    }

}