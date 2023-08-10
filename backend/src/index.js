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
require('dotenv').config({ path: 'env' });
const MongoDBStore = require('connect-mongodb-session')(session);
// const cookieParser = require('cookie-parser')
// app.use(cookieParser());
const app = express();


const store = new MongoDBStore({
    uri:'mongodb+srv://dukesharma71:Atlasforfirst@cluster0.hcsddtz.mongodb.net/NotesManager',
    collection: 'app_sessions'
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(cors());


console.log(process.env.MONGO_URI);

app.use(session({
    secret:'this is my secret key',
    saveUninitialized: false,
    cookie:{
        maxAge:60000 * 4,
    },
    store: store,
    resave:false
}));

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
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