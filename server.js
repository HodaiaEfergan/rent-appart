const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const API_PORT = process.env.PORT || 3003;


//mongodb+srv://hodaia:<password>@users.h9ck0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const mongoose = require('mongoose');
// mongodb+srv://admin:<password>@g-tag-930.l1iqv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//from the atlas mongodb
const db = 'mongodb+srv://hodaia:1234@users.h9ck0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

//connection to db and print "mongodb connected"
mongoose
    .connect(db)
    .then(() => console.log('mongodb connected'))
    .catch(err => console.error(err));

app.use(bodyParser.json({limit: '50mb'})); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'})); // for parsing


// load controller
//const apiCtrl = require('./routes/api');


// app.use('/', res.sendFile(index.html));
//app.use('/api', apiCtrl);


app.listen(API_PORT, () => console.log(`http server is listening on port ${API_PORT}`));