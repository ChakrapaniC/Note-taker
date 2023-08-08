const userModel = require('../Model/userModel');
const bcrypt = require('bcrypt');
const jwt  = require('jsonwebtoken');
const LocalStrategy = require('passport-local');
const Secret_Key = 'this is my secret key'

function PassportAuth(){
    return new LocalStrategy({usernamefield:'email',passwordfield:'password'}, function(username,password,done){
        userModel.findOne({email : username},(err, user)=>{
            if(err){
                return done(err);
            }
            if(!user){
                return done(null,false,{message:"Invalid Email"})
            }
            if(!bcrypt.compareSync(password, user.password)){
                return done(null, false, {message:"Invalid Password"})
            }
            return done(null, user);
        })
    })
}

function VerifyToken(token){
    let res = jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ? decode : err);
    if (res instanceof Error) {
        return false;
    } else {
        return true;
    }
}

function GenerateToken(user){
    return jwt.sign(user, SECRET_KEY, { expiresIn: '1d' });
}

module.exports = {PassportAuth, VerifyToken , GenerateToken}