const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const userRouter = require('./Router/userRouter');
const passport = require('passport');
const UserModel = require('./Model/userModel');
const PassportAuth = require('./Auth/userAuth');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(cors());
app.use('/api/v1',userRouter);
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect('mongodb+srv://dukesharma71:Atlasforfirst@cluster0.hcsddtz.mongodb.net/NotesManager');
mongoose.connection.once('open',()=>{
    console.log('connected to db');
}).on('error',()=>{
    console.log('error');
});

passport.serializeUser(function (user, done) {
    done(null, user._id);
});

passport.deserializeUser(function (id, done) {
    UserModel.findById(id, function (err, user) {
        done(err, user);
    });
});

let port = process.env.PORT || 8000;
app.listen(port,()=>{
    console.log('server is running')
})