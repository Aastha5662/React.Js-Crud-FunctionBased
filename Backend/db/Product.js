const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    des:String,
    price:Number,
    userId:String
});

module.exports = mongoose.model('products',productSchema)