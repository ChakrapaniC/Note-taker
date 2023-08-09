const repo = require('../Repository/userRepo');
// const {GenerateToken} = require('../Auth/userAuth')
function registerUser(req,res){
    repo.RegisterUser(req).then(data => {
      res.status(200).send(data);
      }).catch((err)=>{
             res.status(404).send(err)
  })
}

function loginUser(req,res){
    console.log(req.body);
    // res.send('working')
    repo.LoginUser(req).then(data =>{
        res.status(200).send(data);
    }).catch((err)=>{
        res.status(404).send(err);
    })
}

function authenticated(req,res){
    repo.IsAuthenticated(req).then(data=>{
        res.status(200).send(data);
    }).catch((err)=>{
        res.status(404).send(err);
    })
}
module.exports = {registerUser , loginUser, authenticated}