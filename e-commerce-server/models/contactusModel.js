const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String,
})

const model = mongoose.model('contacts', schema)

module.exports = model;