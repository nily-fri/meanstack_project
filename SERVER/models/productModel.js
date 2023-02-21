const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
    prodid : { type : Number , required : true },
	name: { type : String , required : true } ,
    price: { type : Number , required : true } ,
    colors: { type : [String] , required : true } ,
});

const Product = mongoose.model("products", productsSchema);

module.exports = Product;