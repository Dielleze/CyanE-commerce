const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  tittle: { type: String, required: true },
  description: { type: String },
  price: { type: Number},
  photo: { type: String},
  category: { type: String }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;