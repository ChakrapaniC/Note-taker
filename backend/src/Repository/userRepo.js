const UserModel = require('../Model/userModel');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const { GenerateToken, VerifyToken } = require('../Auth/userAuth');

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

function LoginUser(req, res){
    return new Promise((resolve,reject)=>{
        if (!req.session.passport ) {
            reject({ status: 401, message: "Unauthorized" });
            return;
        }

        const userId = req.session.passport;
        if (!userId) {
            reject({ status: 500, message: "Token generation failed" });
            return;
        }

        // GenerateToken needs to be implemented and return a valid token
        const token = GenerateToken(userId);
        if (!token) {
            reject({ status: 500, message: "Token generation failed" });
            return;
        }

        resolve({ token })
    })
}

function IsAuthenticated(req,res){
    return new Promise((resolve,reject)=>{
        if(!res.headers.authorization){
            reject({status: 401, message:"Token Invalid"});
            return 
        }

        const header = req.headers.authorization;
        if(header){
            resolve({isAuthenticated: VerifyToken(header)})
        }
    })
    
}

module.exports = {RegisterUser, LoginUser, IsAuthenticated};