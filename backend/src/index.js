const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const app = express();

app.use(bodyParser.json());
app.use(logger('dev'));

app.listen(8000,()=>{
    console.log('server is running')
})