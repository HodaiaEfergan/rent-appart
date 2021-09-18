const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    //phone: {type: String, unique: [true, 'phone already exists'], required: true},
    email: {type: String, unique: [true, 'phone already exists'], required: true},
    //name: {type: String,default: ''},
    password: {type: String, required: true},


}, {timestamps: true});

// test commit

const User = mongoose.model('User', schema);
module.exports = User;
