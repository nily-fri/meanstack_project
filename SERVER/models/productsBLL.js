const Product = require('./productModel');

const getAllProducts = async () => {
  let resp = await Product.find({})
    return resp;
};

const getProdcutByName = async (name) => {
  let resp = await Product.find({name})
    return resp;
};

const addProduct = async (prod) => {
    const product = new Product(prod)
    await product.save()
};

const updateProduct = async (id, prod) => {
    await Product.findOneAndUpdate({})
};

module.exports = {
  getAllProducts, getProdcutByName, addProduct, updateProduct
};