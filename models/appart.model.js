const mongoose = require('mongoose');

const schema = new mongoose.Schema({
name: {type: String,default: ''},


}, {timestamps: true});

// test commit

const Appart = mongoose.model('Appart', schema);
module.exports = Appart;
