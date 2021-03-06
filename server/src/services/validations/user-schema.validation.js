const Joi = require('@hapi/joi')


exports.userValidations = (options,params)=>{

    switch(options)
    {
        case 'registerUser':
            const registrationSchema = {
                name: Joi.string().min(2).required(),
                email: Joi.string().min(3).required().email(),
                role: Joi.string().required(),
                password:Joi.string().required()
            }
            return Joi.validate(params,registrationSchema);
        
        case 'login':
            const loginSchema = {
                email: Joi.string().required().email(),
                password:Joi.string().required()
            }
            return Joi.validate(params,loginSchema);

        default:
        return {err:'Invalid Choice'};
        
        
    }

    
}