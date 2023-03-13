const mongoose = require('mongoose');

const schema = mongoose.Schema({
    title: String,
    description: String,
    price: String,
    photo: String,
})

const model = mongoose.model("products", schema)

export default model;