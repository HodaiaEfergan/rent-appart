const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const API_PORT = process.env.PORT || 3000;


//import mongoose database libarary
const mongoose = require('mongoose');

//from the atlas mongodb
const db = 'mongodb+srv://hodaia:1234@users.h9ck0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

//connection to db and print "mongodb connected"
mongoose
    .connect(db)
    .then(() => console.log('mongodb connected'))
    .catch(err => console.error(err));
//libararies
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json({limit: '50mb'})); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'})); // for parsing
//require to our api
const apiCtrl = require('./routes/api');
app.use('/api', apiCtrl);

app.listen(API_PORT, () => console.log(`http server is listening on port ${API_PORT}`));