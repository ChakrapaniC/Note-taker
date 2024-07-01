const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const userRouter = require('./Router/userRouter');
const passport = require('passport');
const UserModel = require('./Model/userModel');
const {PassportAuth} = require('./Auth/userAuth');
const cors = require('cors');
const session = require('express-session');
require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI; 
const MongoDBStore = require('connect-mongodb-session')(session);
// const cookieParser = require('cookie-parser')
// app.use(cookieParser());
const app = express();

console.log("db uri is" , MONGO_URI);
const store = new MongoDBStore({
    uri: MONGO_URI,
    collection: 'app_sessions'
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(cors());

app.use(cors({
    origin: 'https://note-taker-front-end.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));


app.use(session({
    secret:'this is my secret key',
    saveUninitialized: false,
    cookie:{
        maxAge:60000 * 4,
    },
    store: store,
    resave:false
}));

mongoose.connect(MONGO_URI);
mongoose.connection.once('open',()=>{
    console.log('connected to db');
}).on('error',()=>{
    console.log('error');
});
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(function (user, done) {
    done(null, user._id);
});

passport.deserializeUser(function (_id, done) {
    UserModel.findById(_id)
    .then(user => {
        done(null, user);
    })
    .catch(err => {
        done(err, null);
    });
});
passport.use(PassportAuth());
app.use('/api/v1',userRouter);

let port = process.env.PORT || 8000;
app.listen(port,()=>{
    console.log('server is running')
})