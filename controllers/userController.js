const User = require('../models/userModel');
const {authSchema} = require('../helpers/validationSchema');
const creatError = require('http-errors');
require ('dotenv').config();
const {signAccessToken, signRefreshToken} = require('../helpers/jwtHelper');
const {verifyRefreshToken} = require('../helpers/jwtHelper');

module.exports = {
    register: async (req, res, next) => {
        try{
            const {email, password} = req.body;
            const result = await authSchema.validateAsync(req.body);

            const exists = await User.findOne({email: email});
            if(exists) throw creatError.Conflict(`${email} has already been registered`);

            const user = new User(result);
            const savedUser = await user.save();
            // res.send(savedUser)
            const accessToken = await signAccessToken(savedUser.id);
            // const refreshToken = await signRefreshToken(savedUser.id);
            res.send({accessToken})
        }
        catch (error){
            next(error);
        }
    },

    login: async (req, res, next)=>{
        try{
            const result = await authSchema.validateAsync(req.body);
            const user = await User.findOne({email: result.email});
            if (!user)  throw creatError.NotFound('user not registered');

            const isMatch = await user.isValidPassword(result.password);
            if(!isMatch) throw creatError.Unauthorized('username/password is not valid');
        
            const accessToken = await signAccessToken(user.id);
        
            res.send( {accessToken});

            }catch(error){
                if(error.isJoi === true) return next(creatError.BadRequest('Invalid username/password'));
                next(error);
            }
    }
}