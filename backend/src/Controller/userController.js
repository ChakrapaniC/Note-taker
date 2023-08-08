const repo = require('../Repository/userRepo');

function registerUser(req,res){
    repo.RegisterUser(req).then(data => {
      res.status(200).send(data);
      }).catch((err)=>{
             res.status(404).send(err)
  })
}

function loginUser(req,res){
    repo.LoginUser(req).then(data =>{
        res.status(200).send(data);
    }).catch((err)=>{
        res.status(404).send(err);
    })
}
module.exports = {registerUser}