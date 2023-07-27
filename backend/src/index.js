const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const userRouter = require('./Router/userRouter');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cors())
app.use('/api/v1',userRouter)

mongoose.connect('mongodb+srv://dukesharma71:Atlasforfirst@cluster0.hcsddtz.mongodb.net/NotesManager');
mongoose.connection.once('open',()=>{
    console.log('connected to db');
}).on('error',()=>{
    console.log('error');
})

let port = process.env.PORT || 8000;
app.listen(port,()=>{
    console.log('server is running')
})