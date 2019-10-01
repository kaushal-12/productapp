var mongoose = require('mongoose');
autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);

  var Schema = mongoose.Schema;

  var productSchema = new Schema({
    productName: String,
    productPrice: Number,
    company: String
    
  });

  productSchema.plugin(autoIncrement.plugin, {
    model: 'product',
    field: 'productId',
    startAt: 1,
    incrementBy: 1
  });
  

  var product = mongoose.model('product', productSchema,'product');
  module.exports = product