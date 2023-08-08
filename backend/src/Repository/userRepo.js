const UserModel = require('../Model/userModel');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

function RegisterUser(req, res){
    console.log(req.body)
   return new Promise((resolve, reject)=>{
    UserModel.findOne({email : req.body.email}).then((data)=>{
        if(data){
            reject({status:409, message:'user with specific email already exists'});
            // console.log("it reaches if part")
        }else{
            // console.log("it reaches else part")
           let newUser = new UserModel({
             _id: uuidv4(),
             firstname: req.body.firstname,
             lastname : req.body.lastname,
             email: req.body.email,
             password : bcrypt.hashSync(req.body.password,10),
           })
           newUser.save().then((data)=>{
              resolve({status:200 ,message: 'user regster successfully', data:data})
           }).catch((err)=>{
             reject(err)
           })
        }
    })
})
}

function LoginUser(req,res){
    return new Promise((resolve,reject)=>{
        if(!req.session.passport){
            reject({status:401,message:"Unauthrized"});
            return
        }

        const token = req.session.passport;
        if(!token){
          reject({status:500,message:"Token generated failed"});
          return 
        }

        resolve({token: token})
    }).catch((err)=>{
        throw err;
    })
}

module.exports = {RegisterUser,LoginUser};