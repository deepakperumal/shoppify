const User = require('../models/user.model')


/* Get user data by _id */

exports.getUserById  = async (req,res)=>{
    let id = req.params.id
    try
    {
        let userExist  = await User.find({ _id:id }) 
        res.send({ status:'success',data:userExist })
    }
    catch(err)
    {
        res.status(400).send({ status:'error',data:'User does not exist'});
    }
 
}
 